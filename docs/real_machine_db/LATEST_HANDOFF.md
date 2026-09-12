更新日: 2026-09-13

## 現在地点
- recordCount: **1527**
- latestRecordAdded: **パチスロ ダンまち外伝 ソード・オラトリア — No.1527**
- latestRecordAddedPath: `docs/real_machine_db/machines/2022-10-17_danmachi-sword-oratoria.md`
- chronologicalFrontier: **2022-10-17**
- frontierLatestMachine: **パチスロ ダンまち外伝 ソード・オラトリア — No.1527**
- schema: **resetBehavior v0.7**
- status: **2022-10-17_GROUP_OPEN_1_OF_2_KNOWN_CANONICAL_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧表示の `docs/real_machine_db/INDEX.md`、最新 `LATEST_HANDOFF.md`、直前No.1526 `S笑ゥせぇるすまん4` を確認して開始。
- `INDEX.md` は完了済みレコード数19の旧表示のため、README規定どおり最新 `LATEST_HANDOFF.md` とmain実レコードを進捗正本として扱った。
- handoff指定のNo.1527 `パチスロ ダンまち外伝 ソード・オラトリア` を性能コア＋resetBehavior v0.7で追加。
- 2022-10-17群は既知canonical候補2機中1機処理済み。次は `パチスロ 魔法少女育成計画`。
- 前回保持していた導入日競合について、`パチスロ 魔法少女育成計画` はGreenbeltの10/3欄とK-Navi/必勝本/複数解析の10/17が競合しているため、平均化せず10/17群候補として次回処理時に日付根拠を明示する。

## No.1527 — パチスロ ダンまち外伝 ソード・オラトリア
- path: `docs/real_machine_db/machines/2022-10-17_danmachi-sword-oratoria.md`
- manufacturer: **ゼクロスクリエイティブ / 北電子**
- formalModel: **Sダンまち外伝XR**
- inspectionCode: **2S0791**
- releaseDate: **2022-10-17**
- generation/system: **6.4号機 / AT / 差枚数管理 / 擬似ボーナス経由AT**
- payout: **設定1 98.05 / 2 99.02 / 3 100.50 / 4 104.05 / 5 107.06 / 6 110.16%**（一般解析の丸め値98.1～110.2%と整合）
- AT初当り: **1/378.9 / 365.1 / 349.5 / 304.6 / 275.1 / 252.1**
- CZ突入率: **約1/199 / 196 / 193 / 188 / 180 / 172**
- baseGamesPer50: **約40G/50枚**
- netIncrease: **約2.0枚/G**
- basicPayout: **AT初当り時擬似ボーナスで初期差枚決定 / ディヴァインジャッジ3G×継続型 / ファミリアボーナス40G / AT最低50枚保証+上乗せ分 / AT継続バトル勝率約66%over**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_RESET_CORE_WITH_NO_CONFIRMED_SPECIAL_BENEFIT**
- confidence: **OFFICIAL / INDUSTRY / ANALYSIS_HIGH**

### resetBehavior v0.7 — No.1527
- **設定変更**: 有利区間・天井・内部モード・内部状態RESET。
- **据え置き**: 有利区間・天井・内部モード・内部状態CARRY_OVER。
- **純電源OFF→ON**: 天井・内部モード・内部状態・有利区間CARRY_OVER。スロパチクエスト/Altema/ちょんぼりすた系で照合。
- **AT天井**: 通常時777G消化後の周期ジャッジ到達でAT。周期位置次第で実戦発動は777Gを超える。
- **CZ天井**: 最大11周期。内部モードA/B/Cで最大周期が異なり、A=11/B=8/C=5。
- **天井注意**: 途中CZ当選でゲーム数天井がリセットされる解析があるため、CZ間/AT間の定義を混同しない。
- **朝一恩恵**: 固定高モード、短縮天井、確定CZ等の強い設定変更専用恩恵は確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。一部資料は「特になし」、別資料は「調査中」。
- **モード振り分け**: 設定変更専用A/B/C振り分けは通常設定別モード選択率と区別できる高信頼資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- **有利区間ランプ**: 非搭載。ランプ判別不可。
- **変更判別**: 前日G数/周期進行を把握できる場合の翌日進行差は据え置き推測材料。本機固有ガックン条件/発生率は再探索後 `UNVERIFIED_AFTER_RESEARCH`。
- **公開朝一数値**: 設定変更専用として比較可能な数値は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- **主要不利**: `NONE_CONFIRMED_AFTER_RESEARCH`。

## conflicts / definition notes — No.1527
- メーカー表記: 一般機種DBは「北電子」、検定上の型式申請会社はゼクロスクリエイティブ。canonicalは `ゼクロスクリエイティブ / 北電子` と役割併記。
- 機械割: K-Naviの98.05～110.16%と多数解析の98.1～110.2%は丸め精度差でありCONFLICTではない。
- リセット恩恵: 「特になし」と「調査中」が併存。固定の強い恩恵を確定できない点では整合するため `NONE_CONFIRMED_AFTER_RESEARCH`。

## 2022-10-17群 — OPEN 1/2 known canonical
1. `パチスロ ダンまち外伝 ソード・オラトリア` — **No.1527**
2. `パチスロ 魔法少女育成計画` — **未処理 / No.1528候補**

境界監査:
- `パチスロ 魔法少女育成計画` はGreenbelt 2022-10-03更新記事に10/3欄掲載がある一方、K-Navi、必勝本、複数解析、導入前動画は2022-10-17導入で一致。次回レコードでは導入日CONFLICTとして根拠を分離する。
- PB・別型式・30Φ派生・地域先行・延期/段階導入については、10/17 known機処理後に再監査して群CLOSED可否を判定する。

## 遡及 resetBehavior QA
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-03_wild7.md`（ワイルド7）**。
- 本線を優先し、今回QAカーソルは進めていない。

## 次回本線の再開地点
- **2022-10-17群 / No.1528候補 `パチスロ 魔法少女育成計画`。**
- No.1527以前の性能コアはやり直さない。
- No.1528処理後、10/17群のPB・別型式・地域先行・延期/段階導入を再監査し、CLOSED可否を判定する。

## GitHub保存
- No.1527追加 commit: `0b13c180f800d71902dbb0c9021b3a7781eae2ab`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-13
### No.1527 パチスロ ダンまち外伝 ソード・オラトリア
- https://www.kitadenshi.co.jp/slot/sword_oratoria/
- https://www.kitadenshi.co.jp/slot-kentei/sword_oratoria/
- https://www.pidea.jp/articles/1660024373
- https://news.p-world.co.jp/articles/21266/nippon
- https://p-kn.com/slot/3847/
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kitac_slot/118/kh01.php
- https://altema.jp/pachimo/swordoratoria
- https://www.slopachi-quest.com/article/danmachi-sword-oratoria-tenjou/
- https://chonborista.com/slot/kitadenshi/173810/
- https://slotmethod.jp/archives/15436/
- https://pachiseven.jp/machines/6619/cutout/3
- https://ichikatsu.com/newslot2022/
