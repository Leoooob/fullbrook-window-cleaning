---
title: Home
slug: /
sections:
  - type: GenericSection
    title:
      text: Who are we
      color: text-dark
      type: TitleBlock
    subtitle: ''
    text: >+
      Fullbrooks Window Cleaning Services was founded in 2018 to provide the
      personalised cleaning services you require and deserve.


      We cover Berkshire and the surrounding areas, offering services such as:


      *   Window cleaning


      *   Soffits and Fascia cleaning


      *   Gutter clearing & cleaning


      *   Conservatory roof cleaning

    actions:
      - label: Get a free quote
        altText: ''
        url: /contact
        showIcon: true
        icon: arrowRight
        iconPosition: right
        style: primary
        elementId: quote-link
        type: Link
    media:
      url: /images/WhatsApp Image 2024-12-06 at 17.53.03_bca13bed.jpg
      altText: Before and after shots of gutters
      elementId: ''
      type: ImageBlock
    elementId: ''
    colors: bg-light-fg-dark
    styles:
      self:
        alignItems: center
        flexDirection: row
        padding:
          - pt-16
          - pl-16
          - pb-16
          - pr-16
  - type: GenericSection
    title:
      text: 'Gutter cleaning '
      color: text-primary
      styles:
        self:
          textAlign: left
      type: TitleBlock
    subtitle: Video example
    text: |-
      Aenean eros ipsum, interdum quis dignissim non, sollicitudin vitae nisl.
      Aenean vel aliquet elit, at blandit ipsum. Sed eleifend felis sit amet
      erat molestie, hendrerit malesuada justo ultrices. Nunc volutpat at erat
      vitae interdum. Ut nec massa eget lorem blandit condimentum et at risus.
    actions: []
    media:
      title: Title of the video
      url: /images/placeholder-video.mp4
      autoplay: true
      loop: true
      muted: true
      controls: true
      aspectRatio: '16:9'
      styles:
        self:
          padding:
            - pt-2
            - pb-2
            - pl-2
            - pr-2
          borderColor: border-dark
          borderStyle: solid
          borderWidth: 1
          borderRadius: large
      type: VideoBlock
    elementId: null
    colors: bg-light-fg-dark
    styles:
      self:
        flexDirection: row
        justifyContent: center
      subtitle:
        textAlign: left
  - title: Divider
    colors: bg-light-fg-dark
    styles:
      self:
        padding:
          - pt-7
          - pl-7
          - pb-7
          - pr-7
    type: DividerSection
  - type: CarouselSection
    title:
      type: TitleBlock
      text: Customer reviews
      color: text-primary
    subtitle: What our customers say about us
    items:
      - title: >-
          “Gavin has been doing my windows for years now, never missed a job and
          always on-time and without fuss. Couldn't ask for more!”
        tagline: Window Cleaning
        subtitle: 'Leon, Spencers Wood'
        text: ''
        image:
          url: /images/person-placeholder-light.png
          altText: Maria Walters
          styles:
            self:
              borderRadius: full
          type: ImageBlock
        actions: []
        colors: bg-neutralAlt-fg-dark
        styles:
          self:
            padding:
              - pt-9
              - pb-9
              - pl-9
              - pr-9
            textAlign: left
            borderRadius: large
            flexDirection: row
            justifyContent: center
        type: FeaturedItem
      - title: >-
          “Gavin has been doing my windows for years now, never missed a job and
          always on-time and without fuss. Couldn't ask for more!”
        tagline: Testimonial 2
        subtitle: 'John Doe, Area'
        text: ''
        image:
          url: /images/person-placeholder-light.png
          altText: John Doe
          styles:
            self:
              borderRadius: full
          type: ImageBlock
        actions: []
        colors: bg-neutralAlt-fg-dark
        styles:
          self:
            padding:
              - pt-9
              - pb-9
              - pl-9
              - pr-9
            textAlign: left
            borderRadius: large
            flexDirection: row
            justifyContent: center
        type: FeaturedItem
    elementId: null
    variant: next-prev-nav
    colors: bg-light-fg-dark
    styles:
      self:
        justifyContent: center
      subtitle:
        textAlign: left
  - title:
      text: Our services
      color: text-primary
      styles:
        self:
          textAlign: center
      type: TitleBlock
    subtitle: ''
    items:
      - title: Window cleaning
        tagline: ''
        subtitle: ''
        text: "We use a reach-and-wash pure water-fed pole system giving you a crystal clear spotless finish\_once\_dry.\n"
        image:
          url: /images/window cleaning service.jpg
          altText: Window cleaning picture
          styles:
            self:
              borderRadius: x-large
          type: ImageBlock
        colors: bg-light-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            borderRadius: x-large
            flexDirection: col
        type: FeaturedItem
      - title: Soffits & Fascia cleaning
        tagline: ''
        subtitle: ''
        text: "Soffits, facias and outer guttering cleaning\_service.\n"
        image:
          url: /images/soffits cleaning service.jpg
          altText: Soffits and fascia cleaning picture
          styles:
            self:
              borderRadius: x-large
          type: ImageBlock
        colors: bg-light-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            borderRadius: x-large
            flexDirection: col
        type: FeaturedItem
      - title: Gutter clearing & cleaning
        tagline: ''
        subtitle: ''
        text: >
          Keep your home safe and sound, prevent water damage and ensure proper
          drainage.
        image:
          url: /images/gutter cleaning service.jpg
          altText: Placeholder image
          styles:
            self:
              borderRadius: x-large
          type: ImageBlock
        colors: bg-light-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            borderRadius: x-large
            flexDirection: col
        type: FeaturedItem
    variant: three-col-grid
    colors: bg-light-fg-dark
    styles:
      self:
        padding:
          - pt-16
          - pl-8
          - pb-16
          - pr-8
        justifyContent: center
      subtitle:
        textAlign: center
    type: FeaturedItemsSection
  - title:
      text: Get a quote!
      color: text-dark
      type: TitleBlock
    subtitle: ''
    text: >
      Share your contact info, area and the services you would like to book in
      and we will respond within 48h with a free no-obligation quote!
    media:
      fields:
        - name: name
          label: Name
          hideLabel: true
          placeholder: Your name
          isRequired: true
          width: full
          type: TextFormControl
        - name: email
          label: Email
          hideLabel: true
          placeholder: Your email
          isRequired: true
          width: full
          type: EmailFormControl
        - type: TextFormControl
          name: Phone number
          label: Phone number
          hideLabel: true
          placeholder: 'Your phone number '
          isRequired: true
          width: full
        - type: TextFormControl
          name: address
          label: Your address
          hideLabel: true
          placeholder: Your address & post code
          isRequired: true
          width: full
        - name: message
          label: Message
          hideLabel: true
          placeholder: Your services
          width: full
          type: TextareaFormControl
          isRequired: true
      elementId: contact-form
      styles:
        self:
          padding:
            - pt-6
            - pb-6
            - pl-6
            - pr-6
          borderColor: border-dark
          borderStyle: solid
          borderWidth: 1
          borderRadius: large
      type: FormBlock
      submitButton:
        type: SubmitButtonFormControl
        label: Submit
        showIcon: false
        icon: arrowRight
        iconPosition: right
        style: primary
        elementId: null
    badge:
      label: Contact Us
      color: text-primary
      type: Badge
    colors: bg-light-fg-dark
    type: GenericSection
    elementId: contact-us
seo:
  type: Seo
type: PageLayout
---
