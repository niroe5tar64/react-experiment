import { circle, hstack, stack } from '@styled-system/patterns';
import { css } from '@styled-system/css';

function TutorialCard() {
  return (
    <div
      className={css({
        border: '3px solid #000',
        boxShadow: '4px 4px 0px #000',
        borderRadius: '13px',
        padding: 6,
        maxWidth: '388px',
      })}
    >
      <div className={stack({ gap: 4 })}>
        <div className={hstack({ gap: 4 })}>
          <div className={circle({ size: 12, overflow: 'hidden' })}>
            <img
              src="https://picsum.photos/120/120"
              alt="Avatar Image"
              height="120px"
              width="120px"
            />
          </div>
          <div>
            <h2 className={css({ fontWeight: '600' })}>Some User Name</h2>
            <p className={css({ color: '#7D7D7D' })}>@some_user_name</p>
          </div>
        </div>
        <blockquote className={css({ fontSize: '17px' })}>
          I have been using Panda for a few weeks now, and I must say, it has
          exceeded my expectations. The functionality and ease of use are
          remarkable. It has truly simplified web development and stying for me.
          Great job team!
        </blockquote>
      </div>
    </div>
  );
}
export default TutorialCard;
