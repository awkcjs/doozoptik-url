import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Layout from "@/components/Layout";
import ProductsAdmin from "@/components/admin/ProductsAdmin";
import ContactMessagesAdmin from "@/components/admin/ContactMessagesAdmin";
import TestimonialsAdmin from "@/components/admin/TestimonialsAdmin";
import { Shield } from "lucide-react";

const Admin = () => {
  return (
    <Layout>
      <div className="py-16 lg:py-24 bg-gradient-to-b from-accent/50 to-background min-h-screen">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Shield className="w-8 h-8 text-primary" />
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground">Admin Dashboard</h1>
          </div>

          <Tabs defaultValue="products" className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-md">
              <TabsTrigger value="products">Produk</TabsTrigger>
              <TabsTrigger value="messages">Pesan</TabsTrigger>
              <TabsTrigger value="testimonials">Testimoni</TabsTrigger>
            </TabsList>

            <TabsContent value="products" className="mt-6">
              <ProductsAdmin />
            </TabsContent>

            <TabsContent value="messages" className="mt-6">
              <ContactMessagesAdmin />
            </TabsContent>

            <TabsContent value="testimonials" className="mt-6">
              <TestimonialsAdmin />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default Admin;
