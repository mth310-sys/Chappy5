# P北斗の拳 強敵 LT

収集日: 2026-09-20
status: COMPLETE_CORE

machineName: P北斗の拳 強敵 LT
manufacturer: サミー
releaseDate: 2024-03-04
modelType: 甘デジ（通常時 約1/99.9）
gameType: 1種2種混合 / LT搭載ST型
jackpotProbability:
- 通常時: 約1/99.9
- 右打ち中実質: 約1/45.2
initialPayout:
- 4R: 約400個（払出）
rushEntryRate: 50%
rushContinuationRate:
- 強敵RUSH: 約70%（時短50回+残保留4個）
ltName: HYPER強敵RUSH
ltEntryRoute:
- 初当りの50%で強敵RUSHへ
- 強敵RUSH中の特図2大当りの10%（10R）で無想転生演出を経てLT発動
- 電サポ終了後の残保留大当りでは0.5%でHYPER強敵RUSHへ復帰するとの解析資料あり
ltEntryRate:
- 強敵RUSH中大当り時: 10%
- 初当り全体からの単一LT到達率は、RUSH内の反復当選を含む到達確率と「大当り1回ごとのLT振り分け」を混同しないため未統合
ltContinuationRate: 約95%（時短130回+残保留4個）
ltPayoutStructure:
- HYPER強敵RUSH中 特図2: 10R約1000個 20% / 6R約600個 20% / 3R約300個 60%（払出）
- LT突入時期待出玉: 約10300個（初回約400個+強敵RUSH突破約1000個+LT期待出玉約8900個の合算という資料定義）
totalPayoutDistribution:
- 特図1: 4R約400個+強敵RUSH50回 50% / 4R約400個+電サポなし 50%
- 強敵RUSH中 特図2: 10R約1000個+HYPER130回 10% / 10R約1000個+強敵50回 10% / 6R約600個+強敵50回 20% / 3R約300個+強敵50回 60%
- HYPER強敵RUSH中 特図2: 10R約1000個 20% / 6R約600個 20% / 3R約300個 60%、いずれもHYPER130回

timeShortening:
- 強敵RUSH: 時短50回+残保留4個
- HYPER強敵RUSH: 時短130回+残保留4個
cTimeOrSpecialSystems: コンプリート機能搭載。遊タイム非搭載。
ceilingOrSupport: 遊タイム非搭載

gameFlow:
```
通常時（約1/99.9）
 ↓ 初当り 4R約400個
├─ 50% → 通常時
└─ 50% → 強敵RUSH（50回+残保留4個 / 継続約70%）
             ↓ 右打ち大当り
             ├─ 90% → 強敵RUSH継続（3R/6R/10R）
             └─ 10% → 10R + 無想転生 → LT発動
                                      ↓
                           HYPER強敵RUSH
                           130回+残保留4個
                           継続 約95%
                           ↓
                           大当りなら原則HYPER継続
```

notes:
- サミーのラッキートリガー搭載機第1弾。
- 「10R比率20%」と「LT突入率10%」は別概念。強敵RUSH中は10R合計20%のうち半分（全大当りの10%）がHYPER移行。
- 出玉は払出表記。実獲得表記との混同を避ける。
- HYPER強敵RUSHは確変ではなく、右打ち実質約1/45.2に対して時短130回+残保留4個を付与する構造として記録。

sources:
- https://www.p-world.co.jp/machine/database/9971 — P-WORLD（取得 2026-09-20）
- https://www.pachibee.jp/machines/index/124020004 — パチビー（取得 2026-09-20）
- https://p.hisshobon.jp/machine/4236/1/99757 — パチ＆スロ必勝本 大当り振り分け（取得 2026-09-20）
- https://p.hisshobon.jp/machine/4236/1/100970 — パチ＆スロ必勝本 LT解説（取得 2026-09-20）
- https://1geki.jp/pachinko/p_hokuto_tomo_lt/39/ — 一撃 オンライン遊技説明（取得 2026-09-20）
- https://www.atari7.com/pachinko/p-hokuto-tomo.php — アタリ7（取得 2026-09-20）

confidence:
- LT搭載: ANALYSIS_HIGH（複数資料一致）
- 基本スペック: ANALYSIS_HIGH（複数資料一致）
- 導入日: ANALYSIS_HIGH（複数資料一致）
- 詳細振り分け: ANALYSIS_HIGH（複数資料一致）
- LT残保留0.5%復帰: ANALYSIS_HIGH（解析資料で確認、通常の10%振り分けと条件を区別）

missingFields:
- メーカー公式製品ページの現行取得URLは今回の検索で確定できず。公式相当の一次資料確認は次回QA候補。
- 初当り全体を分母にしたLT最終到達率（RUSH反復を含む計算値）はDB原票では未算出。

conflicts:
- 一部資料が「確変/ST」と表現する一方、別資料は確変システムなし・時短として記載。本レコードは1種2種混合の時短回数構造を優先し、ゲームフロー上はST型RUSHとして扱う。
