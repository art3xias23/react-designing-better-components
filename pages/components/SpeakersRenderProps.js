export default function SpeakersRenderProps(props) {

    const speakers = [
      { imageSrc: "speaker-1125", name: "Douglas Crockford" },
      { imageSrc: "speaker-1531", name: "Tamra Baker" },
      { imageSrc: "speaker-10804", name: "Eugene Chuvyrov" },
    ];

    return props.children({
      speakers:speakers
    });
  }