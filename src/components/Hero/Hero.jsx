import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from 'react-parallax-mouse';
import { Typography } from '@mui/material';
import * as images from 'images/images';
import { randomPosition } from 'components/helpers/randomPosition';

export const Hero = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <>
      <div
        style={{
          height: '100vh',
          background: '#8b8b8b',
          color: '#fff',
          overflow: 'hidden',
        }}
      >
        <MouseParallaxContainer
          className="parallax"
          containerStyle={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            right: 0,
            display: 'flex',
          }}
          globalFactorX={0.3}
          globalFactorY={0.3}
          resetOnLeave
        >
          <Typography
            variant="h1"
            sx={{
              position: 'absolute',
              left: { xs: '20%', sm: '50%' },
              top: '50%',
              transform: {
                xs: 'translate(-20%, -50%)',
                sm: 'translate(-50%, -50%)',
              },
              zIndex: 50,
            }}
          >
            Keep your contacts in one place - our contacts library!
          </Typography>
          <MouseParallaxChild
            factorX={0.1}
            factorY={0.1}
            style={{
              background: `url(${images.mainBg})`,
              backgroundPositionY: '50%',
              transform: 'scale(1.2)',
              position: 'absolute',
              filter: 'blur(6px) brightness(50%)',
              backgroundSize: 'auto',
              backgroundRepeat: 'repeat',
              width: '100%',
              height: '100%',
              backfaceVisibility: 'hidden',
            }}
          />
          {matches && (
            <>
              <MouseParallaxChild
                factorX={0.1}
                factorY={0.2}
                style={{
                  filter: 'invert(1)',
                  position: 'absolute',
                  bottom: `${randomPosition(100, 400)}px`,
                  right: `${randomPosition(150, 400)}px`,
                }}
              >
                <img width="100px" src={images.iconVoice} alt="voice" />
              </MouseParallaxChild>
              <MouseParallaxChild
                factorX={0.2}
                factorY={0.01}
                style={{
                  filter: 'invert(1)',
                  position: 'absolute',
                  bottom: '-10%',
                  left: '50%',
                  zIndex: 40,
                  transform: 'translateX(-50%)',
                }}
              >
                <img
                  width="600px"
                  src={images.phoneHands}
                  alt="phone in hands"
                />
              </MouseParallaxChild>
              <MouseParallaxChild
                factorX={0.1}
                factorY={0.2}
                style={{
                  filter: 'invert(1)',
                  position: 'absolute',
                  top: `${randomPosition(1, 300)}px`,
                  right: `${randomPosition(500, 800)}px`,
                }}
              >
                <img width="100px" src={images.iconPhone} alt="phone" />
              </MouseParallaxChild>
              <MouseParallaxChild
                factorX={0.2}
                factorY={0.3}
                style={{
                  filter: 'invert(1)',
                  position: 'absolute',
                  bottom: `${randomPosition(1, 400)}px`,
                  left: `${randomPosition(400, 800)}px`,
                }}
              >
                <img width="100px" src={images.iconPhoneOld} alt="old phone" />
              </MouseParallaxChild>
              <MouseParallaxChild
                factorX={0.3}
                factorY={0.8}
                style={{
                  filter: 'invert(1)',
                  position: 'absolute',
                  top: `${randomPosition(10, 150)}px`,
                  left: `${randomPosition(200, 400)}px`,
                }}
              >
                <img width="100px" src={images.iconPhone1} alt="phone" />
              </MouseParallaxChild>
              <MouseParallaxChild
                factorX={0.2}
                factorY={0.3}
                style={{
                  filter: 'invert(1)',
                  position: 'absolute',
                  top: `${randomPosition(1, 100)}px`,
                  left: `${randomPosition(1, 100)}px`,
                }}
              >
                <img width="100px" src={images.iconMail} alt="mail" />
              </MouseParallaxChild>
              <MouseParallaxChild
                factorX={0.8}
                factorY={0.2}
                style={{
                  filter: 'invert(1)',
                  position: 'absolute',
                  top: `${randomPosition(30, 150)}px`,
                  left: '50%',
                }}
              >
                <img width="100px" src={images.iconMail1} alt="open mail" />
              </MouseParallaxChild>
              <MouseParallaxChild
                factorX={0.05}
                factorY={0.4}
                style={{
                  filter: 'invert(1)',
                  position: 'absolute',
                  top: `${randomPosition(15, 80)}px`,
                  right: `${randomPosition(45, 200)}px`,
                }}
              >
                <img width="100px" src={images.colorPhone} alt="color phone" />
              </MouseParallaxChild>
              <MouseParallaxChild
                factorX={0.2}
                factorY={0.8}
                style={{
                  filter: 'invert(1)',
                  position: 'absolute',
                  bottom: `${randomPosition(10, 75)}px`,
                  right: `${randomPosition(100, 200)}px`,
                }}
              >
                <img width="100px" src={images.colorPhone4} alt="over phone" />
              </MouseParallaxChild>
              <MouseParallaxChild
                factorX={0.4}
                factorY={0.3}
                style={{
                  filter: 'invert(1)',
                  position: 'absolute',
                  bottom: `${randomPosition(50, 150)}px`,
                  left: `${randomPosition(100, 200)}px`,
                }}
              >
                <img width="100px" src={images.colorPhone3} alt="phone 3" />
              </MouseParallaxChild>
              <MouseParallaxChild
                factorX={0.4}
                factorY={0.1}
                style={{
                  filter: 'invert(1)',
                  position: 'absolute',
                  bottom: `50%`,
                  left: `${randomPosition(100, 200)}px`,
                }}
              >
                <img width="100px" src={images.colorPhone2} alt="phone 2" />
              </MouseParallaxChild>
              <MouseParallaxChild
                factorX={0.3}
                factorY={0.1}
                style={{
                  filter: 'invert(1)',
                  position: 'absolute',
                  top: `10%`,
                  left: `${randomPosition(169, 800)}px`,
                }}
              >
                <img width="100px" src={images.colorPhone1} alt="phone 1" />
              </MouseParallaxChild>
            </>
          )}

          {/* <MouseParallaxChild
            factorX={0.2}
            factorY={0.6}
            style={{
              filter: 'invert(1)',
              position: 'absolute',
              top: `${randomPosition(150, 400)}px`,
              left: `${randomPosition(11, 40)}px`,
            }}
          >
            <img width="100px" src={images.button9} alt="button9" />
          </MouseParallaxChild>
          <MouseParallaxChild
            factorX={0.2}
            factorY={0.3}
            style={{
              filter: 'invert(1)',
              position: 'absolute',
              top: `${randomPosition(50, 480)}px`,
              left: `${randomPosition(10, 200)}px`,
            }}
          >
            <img width="100px" src={images.button8} alt="button8" />
          </MouseParallaxChild>
          <MouseParallaxChild
            factorX={0.7}
            factorY={0.2}
            style={{
              filter: 'invert(1)',
              position: 'absolute',
              top: `${randomPosition(5, 40)}px`,
              left: `${randomPosition(100, 700)}px`,
            }}
          >
            <img width="100px" src={images.button7} alt="button7" />
          </MouseParallaxChild>
          <MouseParallaxChild
            factorX={0.4}
            factorY={0.8}
            style={{
              filter: 'invert(1)',
              position: 'absolute',
              top: `${randomPosition(120, 400)}px`,
              left: `${randomPosition(185, 500)}px`,
            }}
          >
            <img width="100px" src={images.button6} alt="button6" />
          </MouseParallaxChild>
          <MouseParallaxChild
            factorX={0.1}
            factorY={0.6}
            style={{
              filter: 'invert(1)',
              position: 'absolute',
              top: `${randomPosition(135, 500)}px`,
              left: `${randomPosition(85, 600)}px`,
            }}
          >
            <img width="100px" src={images.button5} alt="button5" />
          </MouseParallaxChild>
          <MouseParallaxChild
            factorX={0.6}
            factorY={0.4}
            style={{
              filter: 'invert(1)',
              position: 'absolute',
              top: `${randomPosition(200, 400)}px`,
              left: `${randomPosition(10, 400)}px`,
            }}
          >
            <img width="100px" src={images.button4} alt="button4" />
          </MouseParallaxChild>
          <MouseParallaxChild
            factorX={0.2}
            factorY={0.3}
            style={{
              filter: 'invert(1)',
              position: 'absolute',
              top: `${randomPosition(200, 400)}px`,
              left: `${randomPosition(20, 400)}px`,
            }}
          >
            <img width="100px" src={images.button3} alt="button3" />
          </MouseParallaxChild>
          <MouseParallaxChild
            factorX={0.3}
            factorY={0.3}
            style={{
              filter: 'invert(1)',
              position: 'absolute',
              top: `${randomPosition(60, 400)}px`,
              left: `${randomPosition(180, 400)}px`,
            }}
          >
            <img width="100px" src={images.button2} alt="button2" />
          </MouseParallaxChild>
          <MouseParallaxChild
            factorX={0.6}
            factorY={0.3}
            style={{
              filter: 'invert(3)',
              position: 'absolute',
              top: `${randomPosition(200, 400)}px`,
              right: `${randomPosition(130, 400)}px`,
            }}
          >
            <img width="100px" src={images.button1} alt="button1" />
          </MouseParallaxChild>
          <MouseParallaxChild
            factorX={0.3}
            factorY={0.3}
            style={{
              filter: 'invert(1)',
              position: 'absolute',
              top: `${randomPosition(100, 400)}px`,
              right: `${randomPosition(116, 400)}px`,
            }}
          >
            <img width="100px" src={images.button0} alt="button0" />
          </MouseParallaxChild>
          <MouseParallaxChild
            factorX={0.7}
            factorY={0.3}
            style={{
              filter: 'invert(2)',
              position: 'absolute',
              bottom: `${randomPosition(200, 400)}px`,
              right: `${randomPosition(35, 400)}px`,
              transform: 'translateX(-50%)',
            }}
          >
            <img width="100px" src={images.button10} alt="button10" />
          </MouseParallaxChild>
          <MouseParallaxChild
            factorX={0.7}
            factorY={0.3}
            style={{
              filter: 'invert(1)',
              position: 'absolute',
              bottom: `${randomPosition(15, 400)}px`,
              right: `${randomPosition(163, 400)}px`,
              transform: 'translateX(-50%)',
            }}
          >
            <img width="100px" src={images.button11} alt="button11" />
          </MouseParallaxChild> */}
        </MouseParallaxContainer>
      </div>
    </>
  );
};
