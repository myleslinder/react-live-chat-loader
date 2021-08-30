type EmptyPayload = [undefined];
type CampaignPayload = [
  {
    data: {
      widgetVisible: boolean;
      isOnline: boolean;
    };
    campaignId: number;
  }
];
type SliderMessagePayload = [
  {
    botMessage: boolean;
    playbookId?: number;
    interactionId?: number;
    campaignId?: number;
  }
];
type ConversationBasePayload = {
  conversationId: number;
  playbookId?: number;
  interactionId?: number;
  campaignId?: number;
};
export type DriftEventPayloads = {
  ready: [
    any,
    {
      sidebarOpen: boolean;
      chatOpen: boolean;
      widgetVisible: boolean;
      isOnline: boolean;
      teamAvailability: Record<string, any>;
    }
  ];
  chatOpen: EmptyPayload;
  chatClose: EmptyPayload;
  "welcomeMessage:open": EmptyPayload;
  "welcomeMessage:close": EmptyPayload;
  "awayMessage:open": EmptyPayload;
  "awayMessage:close": EmptyPayload;
  "campaign:open": CampaignPayload;
  "campaign:dismiss": CampaignPayload;
  "campaign:click": CampaignPayload;
  "campaign:submit": CampaignPayload;
  "sliderMessage:close": SliderMessagePayload;
  startConversation: [
    {
      conversationId: number;
      inboxId: number;
    }
  ];
  "conversation:selected": [ConversationBasePayload];
  "conversation:buttonClicked": [
    {
      messageId: number;
      createdAt: number;
      authorId: number;
      questionId: number;
      buttonBody: string;
    } & ConversationBasePayload
  ];
  message: [
    {
      inboxId: number;
      teamMember: {
        id: number;
        name: string;
      };
    } & ConversationBasePayload
  ];
  "message:sent": [
    {
      inboxId: number;
    } & ConversationBasePayload
  ];
  emailCapture: [
    {
      data: {
        email: string;
      } & ConversationBasePayload;
    }
  ];
  phoneCapture: [
    {
      messageId: number;
      createdAt: number;
      authorId: number;
      phone: string;
    } & ConversationBasePayload
  ];
  "scheduling:requestMeeting": [
    {
      teamMember: {
        id: number;
        name: string;
      };
    }
  ];
  "scheduling:meetingBooked": [
    {
      teamMember: {
        id: number;
        name: string;
      };
      meeting: {
        time: string;
        duration: number;
        timeZone: string;
      };
    } & ConversationBasePayload
  ];
  "conversation:playbookFired": [
    {
      messageId: number;
      createdAt: number;
      authorId: number;
    } & ConversationBasePayload
  ];
  "conversation:playbookClicked": [ConversationBasePayload];
  "conversation:playbookDismissed": [
    { messageId: number } & ConversationBasePayload
  ];
  "conversation:firstInteraction": [
    {
      messageId: number;
      createdAt: number;
      authorId: number;
    } & ConversationBasePayload
  ];
  gdprClicked: [
    {
      accepted: boolean;
      endUser: number;
    }
  ];
};

type DriftEventHandler<D, P> = (data: D, payload?: P) => void;

export type DriftEventHandlers = {
  [K in keyof DriftEventPayloads]?: DriftEventHandler<DriftEventPayloads[K][0], DriftEventPayloads[K][1]>;
};