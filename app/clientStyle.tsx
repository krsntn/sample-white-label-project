function ClientStyle({
  clientId,
  children,
}: {
  clientId: string;
  children: React.ReactNode;
}) {
  importClientStyles(clientId);

  return <>{children}</>;
}

export default ClientStyle;

async function importClientStyles(clientId: string) {
  try {
    const styleModule = await import(`../clients/${clientId}/styles.css`);
    return styleModule.default;
  } catch (error) {
    console.error(`Error importing CSS for clientId ${clientId}:`, error);
  }
}
