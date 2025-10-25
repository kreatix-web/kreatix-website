import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import {
  Mail,
  User,
  Calendar,
  Trash2,
  RefreshCw,
  LogOut,
  Search,
} from "lucide-react";
import { sql } from "../lib/neon";

type Contact = {
  id: number;
  name: string;
  email: string;
  message: string;
  created_at: string;
  converted: boolean;
  no_prospect: boolean;
};

export default function ContactCRM() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check access token
  useEffect(() => {
    const token = searchParams.get("access");
    const validToken = import.meta.env.VITE_CRM_ACCESS_TOKEN;

    if (token === validToken) {
      setIsAuthenticated(true);
      loadContacts();
    } else {
      setIsAuthenticated(false);
      setLoading(false);
    }
  }, [searchParams]);

  const loadContacts = async () => {
    setLoading(true);
    try {
      const result = await sql(
        "SELECT id, name, email, message, created_at, converted, no_prospect FROM contact_submissions ORDER BY created_at DESC"
      );
      setContacts(result as Contact[]);
    } catch (error) {
      console.error("Error loading contacts:", error);
    } finally {
      setLoading(false);
    }
  };

  const deleteContact = async (id: number) => {
    if (!confirm("Are you sure you want to delete this contact?")) return;

    try {
      await sql("DELETE FROM contact_submissions WHERE id = $1", [id]);
      setContacts(contacts.filter((c) => c.id !== id));
    } catch (error) {
      console.error("Error deleting contact:", error);
      alert("Failed to delete contact");
    }
  };

  const toggleConverted = async (id: number, currentValue: boolean) => {
    try {
      await sql("UPDATE contact_submissions SET converted = $1 WHERE id = $2", [
        !currentValue,
        id,
      ]);
      setContacts(
        contacts.map((c) =>
          c.id === id ? { ...c, converted: !currentValue } : c
        )
      );
    } catch (error) {
      console.error("Error updating converted status:", error);
      alert("Failed to update converted status");
    }
  };

  const toggleNoProspect = async (id: number, currentValue: boolean) => {
    try {
      await sql(
        "UPDATE contact_submissions SET no_prospect = $1 WHERE id = $2",
        [!currentValue, id]
      );
      setContacts(
        contacts.map((c) =>
          c.id === id ? { ...c, no_prospect: !currentValue } : c
        )
      );
    } catch (error) {
      console.error("Error updating no prospect status:", error);
      alert("Failed to update no prospect status");
    }
  };

  const handleLogout = () => {
    navigate("/");
  };

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.message.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-[#0A1628] to-black flex items-center justify-center px-6">
        <div className="text-center">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-red-500/10 flex items-center justify-center">
            <LogOut size={40} className="text-red-500" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Access Denied</h1>
          <p className="text-white/60 mb-8">
            You need a valid access token to view this page.
          </p>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-[#00E5CC] hover:bg-[#00D4BB] text-black font-medium rounded-lg transition-colors"
          >
            Go Home
          </button>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-[#0A1628] to-black flex items-center justify-center">
        <div className="text-center">
          <RefreshCw
            size={48}
            className="text-[#00E5CC] animate-spin mx-auto mb-4"
          />
          <p className="text-white/60">Loading contacts...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#0A1628] to-black text-white">
      {/* Header */}
      <header className="bg-black/50 backdrop-blur-md border-b border-white/10 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-[#00E5CC]">Kreatix CRM</h1>
            <p className="text-sm text-white/60">Contact Management Console</p>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={loadContacts}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              title="Refresh"
            >
              <RefreshCw size={20} />
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
            >
              <LogOut size={18} />
              <span>Exit</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-[#00E5CC]/10 to-[#00E5CC]/5 border border-[#00E5CC]/20 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/60 text-sm mb-1">Total Contacts</p>
                <p className="text-3xl font-bold">{contacts.length}</p>
              </div>
              <div className="w-12 h-12 bg-[#00E5CC]/20 rounded-full flex items-center justify-center">
                <User size={24} className="text-[#00E5CC]" />
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/60 text-sm mb-1">This Week</p>
                <p className="text-3xl font-bold">
                  {
                    contacts.filter((c) => {
                      const weekAgo = new Date();
                      weekAgo.setDate(weekAgo.getDate() - 7);
                      return new Date(c.created_at) > weekAgo;
                    }).length
                  }
                </p>
              </div>
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                <Calendar size={24} className="text-purple-500" />
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-pink-500/10 to-pink-500/5 border border-pink-500/20 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/60 text-sm mb-1">Filtered</p>
                <p className="text-3xl font-bold">{filteredContacts.length}</p>
              </div>
              <div className="w-12 h-12 bg-pink-500/20 rounded-full flex items-center justify-center">
                <Search size={24} className="text-pink-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="relative">
            <Search
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40"
            />
            <input
              type="text"
              placeholder="Search by name, email, or message..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg pl-12 pr-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-[#00E5CC] transition-colors"
            />
          </div>
        </div>

        {/* Contacts Table */}
        <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
          {filteredContacts.length === 0 ? (
            <div className="text-center py-12">
              <Mail size={48} className="mx-auto mb-4 text-white/40" />
              <p className="text-white/60">
                {searchTerm
                  ? "No contacts match your search"
                  : "No contacts yet"}
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-white/5 border-b border-white/10">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white/80">
                      ID
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white/80">
                      Name
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white/80">
                      Email
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white/80">
                      Message
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white/80">
                      Date
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-white/80">
                      Converted
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-white/80">
                      No Prospect
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-white/80">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredContacts.map((contact, index) => (
                    <tr
                      key={contact.id}
                      className={`border-b border-white/5 hover:bg-white/5 transition-colors ${
                        index % 2 === 0 ? "bg-transparent" : "bg-white/[0.02]"
                      }`}
                    >
                      <td className="px-6 py-4 text-sm text-white/60">
                        #{contact.id}
                      </td>
                      <td className="px-6 py-4 text-sm font-medium">
                        {contact.name}
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <a
                          href={`mailto:${contact.email}`}
                          className="text-[#00E5CC] hover:text-[#00D4BB] transition-colors"
                        >
                          {contact.email}
                        </a>
                      </td>
                      <td className="px-6 py-4 text-sm text-white/70 max-w-xs">
                        <div className="line-clamp-2" title={contact.message}>
                          {contact.message}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-white/60 whitespace-nowrap">
                        {new Date(contact.created_at).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <input
                          type="checkbox"
                          checked={contact.converted}
                          onChange={() =>
                            toggleConverted(contact.id, contact.converted)
                          }
                          className="w-5 h-5 rounded border-2 border-white/20 bg-transparent checked:bg-green-500 checked:border-green-500 cursor-pointer transition-colors"
                          aria-label={`Mark ${contact.name} as converted`}
                          title={`Mark ${contact.name} as converted`}
                        />
                      </td>
                      <td className="px-6 py-4 text-center">
                        <input
                          type="checkbox"
                          checked={contact.no_prospect}
                          onChange={() =>
                            toggleNoProspect(contact.id, contact.no_prospect)
                          }
                          className="w-5 h-5 rounded border-2 border-white/20 bg-transparent checked:bg-red-500 checked:border-red-500 cursor-pointer transition-colors"
                          aria-label={`Mark ${contact.name} as no prospect`}
                          title={`Mark ${contact.name} as no prospect`}
                        />
                      </td>
                      <td className="px-6 py-4 text-center">
                        <button
                          onClick={() => deleteContact(contact.id)}
                          className="p-2 hover:bg-red-500/20 text-red-400 hover:text-red-300 rounded-lg transition-colors inline-flex"
                          title="Delete contact"
                        >
                          <Trash2 size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
