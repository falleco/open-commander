"use client";

import { ApiClientsPanel } from "@/components/settings/api-clients-panel";
import { ModelPreferencesPanel } from "@/components/settings/model-preferences-panel";
import { usePageTitle } from "@/hooks/use-page-title";

/**
 * Settings page with agent preferences and API client management.
 */
export default function SettingsPage() {
  usePageTitle("Settings");

  return (
    <div className="grid gap-4 z-10 lg:grid-cols-2 lg:auto-rows-fr">
      <ModelPreferencesPanel />
      <ApiClientsPanel />
    </div>
  );
}
