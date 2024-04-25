function Article({ title, date = "January 1, 1970", preview, minutes }) {
    function bentoBox() {
      let emojiArr = [];
      const bentoBoxNumber = Math.ceil(minutes / 10);
      for (let i = 0; i < bentoBoxNumber; i++) {
        let emoji = "🍱";
        emojiArr.push(emoji);
      }
      return emojiArr;
    }
    function coffeeCup() {
      let emojiArr = [];
      const coffeeCupNumber = Math.ceil(minutes / 5);
      for (let i = 0; i < coffeeCupNumber; i++) {
        let emoji = "☕️";
        emojiArr.push(emoji);
      }
      return emojiArr;
    }
  
    return (
      <article>
        <h3>{title}</h3>
        <small>
          {date} {minutes>30 ? bentoBox() : coffeeCup()} {minutes}  min read
        </small>
        <p>{preview}</p>
      </article>
    );
  }
  export default Article;