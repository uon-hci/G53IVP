exports.label = (label) => {
    let formattedLabel = label.toLowerCase();
    formattedLabel = formattedLabel[0].toUpperCase() + formattedLabel.substring(1);
    formattedLabel = formattedLabel.replace(/_/g, ' ');
    return formattedLabel;
}