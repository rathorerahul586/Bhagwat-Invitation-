/**
 * Run createBhagwatKathaRsvpForm() once from Google Apps Script.
 * It creates a Google Form and a linked Google Sheet for RSVP responses.
 */
function createBhagwatKathaRsvpForm() {
  const form = FormApp.create('श्रीमद्भागवत कथा महोत्सव – आगमन सूचना');
  form.setDescription(
    'ग्राम एकों, जिला जालौन | 01 से 08 फरवरी 2027\n' +
    'आयोजन की व्यवस्था हेतु कृपया अपनी उपस्थिति की जानकारी दें। राधे राधे 🙏'
  );
  form.setConfirmationMessage('आपकी जानकारी प्राप्त हुई। आपका बहुत-बहुत धन्यवाद। राधे राधे 🙏');
  form.setCollectEmail(false);
  form.setLimitOneResponsePerUser(false);
  form.setShowLinkToRespondAgain(true);

  form.addTextItem().setTitle('आपका पूरा नाम').setRequired(true);
  const phoneValidation = FormApp.createTextValidation()
    .requireTextMatchesPattern('^[6-9][0-9]{9}$')
    .setHelpText('कृपया 10 अंकों का सही भारतीय मोबाइल नंबर लिखें।')
    .build();
  form.addTextItem().setTitle('मोबाइल नंबर').setValidation(phoneValidation).setRequired(true);
  form.addMultipleChoiceItem()
    .setTitle('क्या आप कथा में पधार रहे हैं?')
    .setChoiceValues(['हाँ, अवश्य पधारेंगे', 'अभी निश्चित नहीं है', 'क्षमा करें, इस बार नहीं आ पाएँगे'])
    .setRequired(true);
  form.addListItem()
    .setTitle('आप किस दिन आने की योजना बना रहे हैं?')
    .setChoiceValues([
      '01 फरवरी 2027 – कलश यात्रा', '02 फरवरी 2027', '03 फरवरी 2027',
      '04 फरवरी 2027', '05 फरवरी 2027', '06 फरवरी 2027',
      '07 फरवरी 2027', '08 फरवरी 2027 – पूर्णाहुति एवं भंडारा', 'एक से अधिक दिन'
    ])
    .setRequired(false);
  form.addTextItem()
    .setTitle('आने का अनुमानित समय')
    .setHelpText('उदाहरण: सुबह 10:30 बजे / दोपहर 12 बजे')
    .setRequired(false);
  form.addListItem()
    .setTitle('आपके साथ कुल कितने सदस्य आएँगे?')
    .setChoiceValues(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '10 से अधिक'])
    .setRequired(false);
  form.addParagraphTextItem()
    .setTitle('यदि आप नहीं आ पाएँगे, तो कृपया कारण बताएं (वैकल्पिक)')
    .setRequired(false);
  form.addParagraphTextItem()
    .setTitle('कोई अन्य जानकारी / संदेश (वैकल्पिक)')
    .setRequired(false);

  const sheet = SpreadsheetApp.create('श्रीमद्भागवत कथा – आगमन सूचनाएँ');
  form.setDestination(FormApp.DestinationType.SPREADSHEET, sheet.getId());

  Logger.log('PUBLIC FORM URL: ' + form.getPublishedUrl());
  Logger.log('EDIT FORM URL: ' + form.getEditUrl());
  Logger.log('RESPONSE SHEET URL: ' + sheet.getUrl());
}
