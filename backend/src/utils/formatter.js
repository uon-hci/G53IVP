exports.label = (label) => {
    let formattedLabel = label.toLowerCase();
    formattedLabel = formattedLabel[0].toUpperCase() + formattedLabel.substring(1);
    formattedLabel = formattedLabel.replace(/_/g, ' ');
    formattedLabel = formattedLabel.replace(/;/g, ': ');
    formattedLabel = formattedLabel.replace(/\&/g, 'and');
    return formattedLabel;
}