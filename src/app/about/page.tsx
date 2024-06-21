import PaymentTable from "./payment_table";

const AboutPage = () => {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="text-2xl font-semibold leading-none tracking-tight">
          Payments
        </h3>
        <p className="text-sm text-muted-foreground">Manage your payments.</p>
      </div>
      <PaymentTable />
    </div>
  );
};

export default AboutPage;
