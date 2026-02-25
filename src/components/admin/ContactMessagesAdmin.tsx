import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Loader2, Mail, MailOpen, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";
import { id as localeId } from "date-fns/locale";

const ContactMessagesAdmin = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Fetch messages
  const { data: messages, isLoading } = useQuery({
    queryKey: ['contact-messages'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('contact_messages')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    },
  });

  // Update status
  const updateStatus = useMutation({
    mutationFn: async ({ id, status }: { id: string; status: string }) => {
      const { error } = await supabase
        .from('contact_messages')
        .update({ status })
        .eq('id', id);
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contact-messages'] });
      toast({ title: "Status berhasil diupdate!" });
    },
  });

  // Delete message
  const deleteMessage = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from('contact_messages')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contact-messages'] });
      toast({ title: "Pesan berhasil dihapus!" });
    },
  });

  const handleDelete = async (id: string) => {
    if (!confirm("Yakin ingin menghapus pesan ini?")) return;
    deleteMessage.mutate(id);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-20">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Pesan Kontak</h2>
        <Badge variant="secondary">{messages?.length || 0} Pesan</Badge>
      </div>

      <div className="space-y-4">
        {messages?.map((message: any) => (
          <Card key={message.id} className={message.status === 'unread' ? 'border-primary/50' : ''}>
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                    {message.status === 'unread' ? (
                      <Mail className="w-5 h-5 text-primary" />
                    ) : (
                      <MailOpen className="w-5 h-5 text-muted-foreground" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{message.nama}</h3>
                    <p className="text-sm text-muted-foreground">{message.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={message.status === 'unread' ? 'default' : 'secondary'}>
                    {message.status === 'unread' ? 'Belum Dibaca' : 
                     message.status === 'read' ? 'Sudah Dibaca' : 'Dibalas'}
                  </Badge>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => handleDelete(message.id)}
                    disabled={deleteMessage.isPending}
                  >
                    <Trash2 className="w-4 h-4 text-destructive" />
                  </Button>
                </div>
              </div>

              <p className="text-sm text-foreground mb-4 whitespace-pre-wrap">{message.pesan}</p>

              <div className="flex items-center justify-between">
                <p className="text-xs text-muted-foreground">
                  {format(new Date(message.created_at), "dd MMMM yyyy, HH:mm", { locale: localeId })}
                </p>
                <div className="flex gap-2">
                  {message.status === 'unread' && (
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => updateStatus.mutate({ id: message.id, status: 'read' })}
                      disabled={updateStatus.isPending}
                    >
                      Tandai Dibaca
                    </Button>
                  )}
                  {message.status === 'read' && (
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => updateStatus.mutate({ id: message.id, status: 'replied' })}
                      disabled={updateStatus.isPending}
                    >
                      Tandai Dibalas
                    </Button>
                  )}
                  <Button
                    size="sm"
                    asChild
                  >
                    <a href={`mailto:${message.email}?subject=Re: Pesan dari ${message.nama}`}>
                      Balas via Email
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {messages?.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center text-muted-foreground">
            <Mail className="w-12 h-12 mx-auto mb-4 opacity-30" />
            <p>Belum ada pesan masuk.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ContactMessagesAdmin;
