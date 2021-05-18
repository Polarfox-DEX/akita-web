import { FunctionComponent } from 'react';
import classnames from 'classnames';

export interface FooterProps {
  className?: string;
}

export const Footer: FunctionComponent<FooterProps> = ({ className }) => (
  <section
    className={classnames('bg-blue-200 py-32', className)}
    style={{ background: "url('images/footer/bg.jpg')" }}
  >
    <p>
      Built by{' '}
      <a href="https://www.polarfox.io/" target="blank">
        Polarfox Labs
      </a>
    </p>
    <p>🦊</p>
  </section>
);
