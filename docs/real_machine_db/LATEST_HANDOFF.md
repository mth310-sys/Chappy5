更新日: 2026-09-12

## 現在地点
- recordCount: **1469**
- latestRecordAdded: **パチスロアラジンAクラシック — No.1469**
- latestRecordAddedPath: `docs/real_machine_db/machines/2022-01-24_aladdin-a-classic.md`
- chronologicalFrontier: **2022-01-24**
- frontierLatestMachine: **パチスロアラジンAクラシック — No.1469**
- schema: **resetBehavior v0.7**
- status: **2022-01-24_GROUP_OPEN_6_OF_11_KNOWN_INDEPENDENT_RECORDS_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧 `docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前No.1468「新世紀エヴァンゲリオン～魂の共鳴～」を確認して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり最新 `LATEST_HANDOFF.md` とmain実レコードを進捗正本として扱った。
- handoff指定どおり、2022-01-24群の次機種 `パチスロアラジンAクラシック` をNo.1469へ追加。
- 性能コアは業界一次/準一次、P-WORLD/GreenBelt系記事、1geki、HAZUSE、なな徹等で照合。設定1〜6の機械割97.6〜108.8%、AC+BIG初当たり1/275.3〜1/176.4、約32.2G/50枚、AT純増約2.9枚/Gを保存。
- 正式型式 `S アラジンクラシック KF`、製造元銀座、検定番号 `1S1061` を業界検定通過資料とHAZUSEで照合。
- 通常本天井は通常時1200GでAC+状態突入濃厚。AC単発時は天井G数を引き継ぐ。有利区間開始後または状態準備終了後310G消化で約25%の救済AC抽選あり。
- resetBehavior v0.7は設定変更で有利区間・天井・内部状態RESET、据え置きで同3項目CARRY_OVER。純電源OFF→ONも有利区間・天井・内部状態CARRY_OVERを複数解析で直接確認。
- 公開朝一数値として、有利区間移行時は成立役不問3.6%で状態超ロング移行抽選。漏れた場合の1G目成立役別は連チェリー25%、ラクダ50%、単チェリー/チャンス目は状態移行濃厚。後年解析とサミー開発ボイス引用資料で照合。
- 310G救済は設定変更専用ではなく新規有利区間開始/状態準備終了後の共通機構。ただし設定変更後は有利区間開始を起点に311G付近で約25%の救済AC抽選となるため、朝一価値として分離記録。
- 変更判別は、有利区間ランプ消灯＝設定変更濃厚、点灯＝据え置き濃厚。また朝一サブ液晶の遊技回数0Gは設定変更濃厚材料。
- 本機固有ガックン条件/発生率、設定変更の一部で発生する高確フェイク/高確スタートの詳細振り分けは検索語・資料系統を変えて再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 遡及resetBehavior QAカーソルは本線優先のため進めず、`docs/real_machine_db/machines/2007-02_playboy.md`（パチスロPLAYBOY / 25φ）を維持。

## No.1469 — パチスロアラジンAクラシック
- path: `docs/real_machine_db/machines/2022-01-24_aladdin-a-classic.md`
- manufacturer: **サミー（製造: 銀座）**
- formalModel: **S アラジンクラシック KF**
- certificationNumber: **1S1061**
- releaseDate: **2022-01-24**
- generation/system: **6.2号機 / AT / 状態ループ型**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.6 / 98.8 / 100.3 / 104.0 / 107.2 / 108.8%**
- initialHit: **AC+BIG 1/275.3 / 263.4 / 251.4 / 226.0 / 199.6 / 176.4**
- baseGamesPer50: **約32.2G/50枚**
- netIncrease: **AT約2.9枚/G**
- basicPayout: **AC 1セット30G / BIG平均約100枚 / SAC 20〜最大1000G**
- normalCeiling: **通常時1200GでAC+状態突入濃厚。AC単発時は天井G引継ぎ。**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_FOR_YARDSTICK**
- confidence: **HIGH_CORE_HIGH_RESET**

### resetBehavior v0.7 — No.1469
- **設定変更**: 有利区間・天井・内部状態RESET。新規有利区間から再開。
- **据え置き**: 有利区間・天井・内部状態CARRY_OVER。
- **純電源OFF→ON**: 有利区間・天井・内部状態CARRY_OVER。
- **通常天井**: 1200GでAC+状態突入濃厚。AC単発時は天井G数を引継ぐ。
- **リセット天井短縮**: 本天井1200Gの固定短縮なし確認。ただし有利区間開始後310G消化時に約25%で救済AC抽選（朝一は311〜312G付近）。
- **公開朝一数値**: 成立役不問3.6%で状態超ロング。漏れ後の1G目は連チェリー25% / ラクダ50% / 単チェリー・チャンス目は状態移行濃厚。
- **変更判別**: 有利区間ランプ消灯＝設定変更濃厚 / 点灯＝据え置き濃厚。朝一サブ液晶遊技回数0Gも設定変更濃厚材料。
- **ガックン**: 本機固有条件/発生率は `UNVERIFIED_AFTER_RESEARCH`。

## 2022-01-24群 — OPEN
既知の独立レコード候補:
1. **ハナハナホウオウ～天翔～（25φ） — No.1464 / DONE**
2. **ハナハナホウオウ～天翔～-30（30φ） — No.1465 / DONE**
3. **パチスロディスクアップ2 — No.1466 / DONE**
4. **聖闘士星矢 冥王復活 — No.1467 / DONE**
5. **新世紀エヴァンゲリオン～魂の共鳴～ — No.1468 / DONE**
6. **アラジンAクラシック — No.1469 / DONE**
7. **南国物語30 — No.1470候補 / NEXT**
8. **ハイスクールD×D2 ハーレム王に俺はなる**
9. **ぱちスロ ギャグダー**
10. **パチスロ春一番**
11. **来雷エイサー30**

## 次回本線の再開地点
- **No.1470候補「南国物語30」— 2022-01-24。**
- 性能コアとresetBehavior v0.7を同時収集する。
- 同日群を最後まで処理後、別型式/25φ・30φ/PB/地域先行/延期・段階導入を再監査してCLOSED判定する。
- **2022-01-25 ブルーファルコン（玉越PB）** を1/24群と混同しない。
- 25φ後発紫パネル `Sハナハナホウオウ～天翔～GP` は2022-05上旬導入の別型式。1/24群へ重複登録しない。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 前回処理済み: `docs/real_machine_db/machines/2007-01_karate-baka-ichidai.md`（空手バカ一代）→ **PARTIAL_RESEARCH_EXHAUSTED**。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-02_playboy.md`（パチスロPLAYBOY / 25φ）**。
- 今回は本線No.1469を優先し、遡及QAは未処理。

## GitHub保存
- No.1469追加 commit: `8b760fbc6913ccc076784de6425a4d7609e373f9`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-12
### No.1469 パチスロアラジンAクラシック
- https://news.p-world.co.jp/articles/18863/nippon
- https://www.yugitsushin.jp/open/maker/20211109-1203/
- https://news.p-world.co.jp/articles/19303/greenbelt
- https://1geki.jp/slot/s_aladdin_ac/
- https://hazuse.com/machine/pachislot/1S1061/
- https://nana-press.com/kaiseki/machine/275/8030/
- https://www.slopachi-quest.com/article/aladdin-a-classic-tenjou/
- https://1geki.jp/slot/s_aladdin_ac/3/
- https://ichikatsu.com/aladdinaclassic/
- https://slot8192m.blog.fc2.com/blog-entry-416.html
