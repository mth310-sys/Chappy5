更新日: 2026-09-13

## 現在地点
- recordCount: **1526**
- latestRecordAdded: **S笑ゥせぇるすまん4 — No.1526**
- latestRecordAddedPath: `docs/real_machine_db/machines/2022-10-03_s-warau-salesman4.md`
- chronologicalFrontier: **2022-10-03**
- frontierLatestMachine: **S笑ゥせぇるすまん4 — No.1526**
- schema: **resetBehavior v0.7**
- status: **2022-10-03_GROUP_CLOSED_4_OF_4_CANONICAL_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧表示の `docs/real_machine_db/INDEX.md`、最新 `LATEST_HANDOFF.md`、直前No.1525 `パチスロRYUKYU BEAT-30` を確認して開始。
- `INDEX.md` は完了済みレコード数19の旧表示のため、README規定どおり最新 `LATEST_HANDOFF.md` とmain実レコードを進捗正本として扱った。
- handoff指定のNo.1526 `S笑ゥせぇるすまん4` を性能コア＋resetBehavior v0.7で追加。
- 2022-10-03 canonical群は `パチスロハードボイルド`、`パチスロ バイオハザード RE:2`、`パチスロRYUKYU BEAT-30`、`S笑ゥせぇるすまん4` の4機を処理済みとしてCLOSED。
- Greenbeltの2022-10-03更新記事には `パチスロ魔法少女育成計画` が10/3欄に掲載される一方、K-Navi、必勝本、複数解析、導入前動画は2022-10-17導入で一致。日付競合は平均化せず、同機は10/17群候補へ送る。

## No.1526 — S笑ゥせぇるすまん4
- path: `docs/real_machine_db/machines/2022-10-03_s-warau-salesman4.md`
- manufacturer: **三洋物産**
- formalModel: **S笑ゥせぇるすまん4KH**
- inspectionCode: **2S0476**
- releaseDate: **2022-10-03**
- generation/system: **6.5号機 / AT / 擬似ボーナス / JAC搭載BIG**
- payout: **設定L 88.7 / 1 97.2 / 2 99.2 / 4 103.1 / 5 106.1 / 6 109.0%**
- bonus初当り: **1/287.6 / 268.7 / 237.2 / 217.7 / 195.1**（設定1/2/4/5/6）
- bonus出現率: **1/212.9 / 198.5 / 175.2 / 160.1 / 144.0**
- CZ出現率: **1/209.8 / 198.1 / 168.8 / 159.1 / 147.6**
- baseGamesPer50: **35.1G/50枚**
- netIncrease: **BIG小役ゲーム約1.1枚/G / JAC・REG約2.8枚/G**
- basicPayout: **BIG 30G+α・平均約409枚 / REG 20G / BIG後欲望輪廻ZONE4G・ボーナス期待度約50%**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_RESET_CORE_WITH_POWER_CYCLE_PARTIAL**
- confidence: **OFFICIAL / INDUSTRY / ANALYSIS_HIGH**

### resetBehavior v0.7 — No.1526
- **設定変更**: 有利区間RESET、天井RESET、内部状態RESET。高確スタート＋通常モードC 100%。
- **据え置き**: 有利区間・天井・内部状態CARRY_OVER。
- **純電源OFF→ON**: 天井/モード/内部状態/有利区間を個別に直接規定した本機固有資料を十分な再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。一般論で補完しない。
- **通常天井**: 555G+前兆。解析上の実戦最大表記は580G前後。
- **朝一モードC**: 293G消化時CZ当選率100%、当該CZは成功確定。通常天井そのものの短縮とは分離して保存。
- **状態**: 設定変更後は高確スタート。細分率は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- **有利区間**: ランプ非搭載でランプ判別不可。有利区間リセット時は欲望輪廻ZONEへ入るが、引継ぎ時も入る可能性があるため突入だけでは判別不可。
- **変更判別**: 293G CZは変更期待度UP材料。ただし他契機CZもあるため単独確定ではない。本機固有ガックン条件/発生率は `UNVERIFIED_AFTER_RESEARCH`。
- **公開朝一数値**: モードC 100%、293G CZ 100%、当該CZ成功確定。
- **主要不利**: `NONE_CONFIRMED_AFTER_RESEARCH`。

## conflicts / definition notes — No.1526
- 設定L機械割はP-WORLD/K-Navi/販社資料が88.7%、HAZUSEは調査中。数値直接競合ではなく公開状況差。canonicalは88.7%。
- 天井は「555G+α」と「最大580G前後」が併存。内部到達Gと前兆込み実戦表記として定義分離。

## 2022-10-03群 — CLOSED 4/4 canonical
1. `パチスロハードボイルド` — **No.1523**
2. `パチスロ バイオハザード RE:2` — **No.1524**
3. `パチスロRYUKYU BEAT-30` — **No.1525**
4. `S笑ゥせぇるすまん4` — **No.1526**

境界監査:
- Greenbelt 2022-10-03記事は上記に加え `パチスロ魔法少女育成計画` を10/3欄に置くが、K-Navi/必勝本/複数解析/導入前動画は10/17で一致。10/3には重複登録せず10/17候補へ送る。
- 10/17群の次候補は `ダンまち外伝 ソード・オラトリア` と `パチスロ 魔法少女育成計画`。PB・派生・別型式・地域先行は次回開始時に再監査する。

## 遡及 resetBehavior QA
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-03_wild7.md`（ワイルド7）**。
- 本線を優先し、今回QAカーソルは進めていない。

## 次回本線の再開地点
- **2022-10-17群 / No.1527候補 `ダンまち外伝 ソード・オラトリア`。**
- 続いて `パチスロ 魔法少女育成計画` を処理する。
- No.1523～1526の性能コアはやり直さない。

## GitHub保存
- No.1526追加 commit: `da997724e732a04afac636237f7a5d27386e0ef4`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-13
### No.1526 S笑ゥせぇるすまん4
- https://www.sanyobussan.co.jp/information/pdf/sanyo_press_release_20220801_02.pdf
- https://www.pidea.jp/articles/1658720419
- https://www.p-world.co.jp/machine/database/9697
- https://1geki.jp/slot/s_warau4/
- https://1geki.jp/slot/s_warau4/3/
- https://1geki.jp/slot/s_warau4/45/
- https://1geki.jp/slot/s_warau4/81/
- https://nana-press.com/kaiseki/machine/432/
- https://nana-press.com/kaiseki/machine/432/11961/
- https://hazuse.com/machine/pachislot/2S0476/
- https://p-kn.com/slot/3841/
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanyo_slot/39/tj04-2.php

### 10/3→10/17 boundary
- https://news.p-world.co.jp/articles/21806/greenbelt
- https://p-kn.com/slot/3851/
- https://p.hisshobon.jp/machine/3975/1/91502
- https://www.youtube.com/watch?v=NG4VPtVIIFs
- https://ichikatsu.com/newslot2022/
