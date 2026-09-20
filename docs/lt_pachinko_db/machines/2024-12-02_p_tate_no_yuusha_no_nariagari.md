# P盾の勇者の成り上がり

status: COMPLETE_CORE
retrievedAt: 2026-09-21

machineName: P盾の勇者の成り上がり
formalModelName: P盾の勇者の成り上がりGFPC
manufacturer: サミー（型式資料: 銀座系資料も参照）
releaseDate: 2024-12-02
modelType: ミドル / LT搭載
gameType: 一種二種混合 / 転落型RISING RUSH + ST型上位RUSH

jackpotProbability:
- 通常時大当り: 約1/319.7
- 右打ち中大当り: 約1/45.5
- RISING RUSH中転落: 約1/118.7
- ブレイクタイム: 約1/504

initialPayout:
- 主要払出: 10R 約1500個 / 4R 約600個 / 2R 約300個
- 通常初当りからRUSH突入率80%

rushEntryRate: 80%
rushContinuationRate:
- RISING RUSH: 約75%
- 盾の勇者のアルティメットタイム: 約85%（ST80+残保留4、残保留込み）

ltName: 裏アルティメットタイム
ltEntryRoute:
- 初当りの一部 約3.3%から直行
- 右打ち中大当りの約10%（10R大当り時の約20%）からLT発動
- ブレイクタイムの一部（パチマガスロマガでは0.1%）からLT
ltEntryRate:
- 初当りの一部: 約3.3%
- 右打ち中大当り: 約10%
- ブレイクタイム: 0.1%（単一解析系の直接値として保存）
- 通常初当り基準の総LT到達率: UNVERIFIED（複数経路を合算推測しない）
ltContinuationRate: 約91%（残保留込み）

ltPayoutStructure:
- 裏アルティメットタイムはST80回+残保留4個。
- 大当り振り分けの約40%が次回大当り濃厚状態となることで実質継続率約91%。
- 右打ち主要払出は約1500個を含む。詳細振り分けは出典画像依存部分があるため、テキストで直接確認できた値のみ確定。

totalPayoutDistribution:
- 払出基準: 10R 約1500個 / 4R 約600個 / 2R 約300個。
- RUSH中は大当りの約50%が約1500個、うち一部がLT契機。

timeShortening:
- 盾の勇者のアルティメットタイム / 裏アルティメットタイム: ST80回 + 残保留4個
- RISING RUSH: 転落型

cTimeOrSpecialSystems:
- ブレイクタイム 約1/504。300個獲得後、一部でLT。
ceilingOrSupport: 遊タイムの搭載根拠なし

gameFlow: |
  通常時 約1/319.7
   ↓ 初当り
   ├─ RUSH非突入 → 通常
   ├─ RISING RUSH（転落型、勝利約75%）
   │    ↓ バトル勝利/大当り
   │   盾の勇者のアルティメットタイム（ST80+残4、約85%）
   │    ↓ 右打ち大当りの約10%など
   │   LT「裏アルティメットタイム」（約91%）
   └─ 初当りの一部 約3.3% → LT直行
  別経路: ブレイクタイム約1/504 → 一部でLT

notes:
- P-WORLD、パチマガスロマガ、必勝本、一撃でLT搭載・LT名称・主要経路・約91%を横断照合。
- P-WORLDの「RUSH80%」と解析資料の「RISING RUSH 66.7%」は定義差。初当り全体のRUSH突入は80%、RISING RUSHはその内訳の一状態として分離して扱う。
- 後発スマパチ「e盾の勇者の成り上がり アルティメット199ver.」とは別レコード。
- LTは発動時に必ず告知されるとは限らない仕様。

sources:
- https://www.p-world.co.jp/machine/database/10134 — LT搭載、通常1/319.7、RUSH80%、通常/上位構造、右1500比率（retrieved 2026-09-21）
- https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/sammy_pachi/319/kh01.php — 型式名、導入日、基本構造、約75/85/91%（retrieved 2026-09-21）
- https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/sammy_pachi/319/kh04.php — ゲームフロー、RISING RUSH、ブレイクタイム経路（retrieved 2026-09-21）
- https://hisshobon.com/machineinfo/94270/ — LT名称、3.3%直行、右約10%、ST80+4、約91%（retrieved 2026-09-21）
- https://1geki.jp/pachinko/p_tateyuu/39/ — 確率、継続率、払出/実獲得分離、電サポ（retrieved 2026-09-21）
- https://1geki.jp/pachinko/p_tateyuu/53/ — LT構造、約40%次回濃厚、約91%（retrieved 2026-09-21）

confidence:
- LT搭載/LT名称: ANALYSIS_HIGH
- 基本確率/RUSH構造: ANALYSIS_HIGH
- LT主要経路/継続率: ANALYSIS_HIGH
- ブレイクタイム0.1% LT経路: ANALYSIS_SINGLE

missingFields:
- 通常初当り基準の総LT到達率
- 右打ち全振り分けのテキスト数値（画像依存部分は推測せず未転記）

conflicts: none
