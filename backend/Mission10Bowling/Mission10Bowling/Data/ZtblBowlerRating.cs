﻿using System;
using System.Collections.Generic;

namespace Mission10Bowling.Data;

public partial class ZtblBowlerRating
{
    public string BowlerRating { get; set; } = null!;

    public short? BowlerLowAvg { get; set; }

    public short? BowlerHighAvg { get; set; }
}
