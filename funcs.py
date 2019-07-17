from sympy.solvers import solve
import numpy as np
import pandas as pd
from sympy import Symbol
import math
import matplotlib.pyplot as plt
z = Symbol('x')
def linearity(trial,show = False):
    fx = trial.raw['x'].iloc[0]
    lx = trial.raw['x'].iloc[-1]
    fy = trial.raw['y'].iloc[0]
    ly = trial.raw['y'].iloc[-1]
    slope = (float(fy) - ly) / float(fx - lx)
    bee = fy - (slope*fx)
    func = lambda x: (slope * x) + bee
    gety = lambda x: trial.raw.loc[trial.raw['x'] == x]['y'].iloc[0]
    r = list(trial.raw['x'].to_dict().values())
    perpslope = - ((1)/float(slope))
    perpbee = lambda x,y: y - (perpslope*x)
    perpintersect = lambda x: solve(( (perpslope * z) + perpbee(x,gety(x)) - ((slope * z) + bee)), z) #fix final gety(x) term
    
    #now we just need to determine ymax
    alldist = {}
    maxdist = 0.0
    maxp1 = [0,0]
    maxp2 = [0,0]
    oldi = 0.0
    oldy = 0.0
    for i in r[1:-1]:   
        y = gety(i)   
        if not i == oldi:
            if not y == oldy:
                perpx = perpintersect(i)
                perpx = perpx[0]
                temp = ((i - perpx)**2 + (y - func(perpx))**2)
                dist = math.sqrt(temp)
                #alldist.append(abs(dist))
                alldist[(i,y)] = {'dist':dist,'x2':perpx,'y2':func(perpx)}
        oldi,oldy = i,y 

    
    df = pd.DataFrame.from_dict(alldist).T
    dists = list(df['dist'])
    #print(max(dists))
    trial.add('maxlin',max(dists))
    trial.add('avglin',(sum(dists)/len(dists)))
    trial.add('intlin',sum(dists))
    
    def pointsfromdist(df, dist):
        numindexdf = df.loc[df['dist'] == dist]
        #print(numindexdf)
        numindexdf = numindexdf.reset_index()
        x1, y1 = numindexdf['level_0'][0], numindexdf['level_1'][0]
        x2, y2 = numindexdf['x2'][0], numindexdf['y2'][0]
        return([[x1,x2],[y1,y2]])
    
    if show is True:
        x = trial.raw['x']
        y = trial.raw['y']
        plt.plot(x,y,'b')
        
        plt.plot(pointsfromdist(df,max(dists))[0],pointsfromdist(df,max(dists))[1],'r')
        plt.plot(r,[func(i) for i in r],'g')
        plt.show()
        for dist in dists:
            plt.plot(pointsfromdist(df,dist)[0],pointsfromdist(df,dist)[1])
        plt.plot(x,y,'b')
        plt.plot(r,[func(i) for i in r],'g')
        
        plt.show()
    
    return(trial)

def takedev(data,show = False, label = 'dev'):
    dev = pd.DataFrame(index = data.index)
    dev['x'] = 0
    dev['y'] = 0
    gety = lambda x: data.loc[data['x'] == x]['y'].iloc[0]
    rx = list(data['x'].to_dict().values())[1:-1]
    subx = [abs(t[1] - t[0]) for t in zip(rx, rx[1:])]
    ry = list(data['y'].to_dict().values())[1:-1]
    suby = [abs(t[1] - t[0]) for t in zip(ry, ry[1:])]
    x =  pd.DataFrame(subx,suby).reset_index()
    x.columns = ['y','x']
    #xdata[label] = x
    
    if show == True:
        plt.plot(x['x'],'b')
        plt.plot(x['y'],'r')
        plt.show()
    
    return x