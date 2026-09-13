更新日: 2026-09-13

## 現在地点
- recordCount: **1545**
- latestRecordAdded: **もっと！チバリヨ-25 — No.1545**
- latestRecordAddedPath: `docs/real_machine_db/machines/2023-01-10_motto-chibariyo-25.md`
- chronologicalFrontier: **2023-01-10**
- frontierLatestMachine: **もっと！チバリヨ-25 — No.1545**
- schema: **resetBehavior v0.7**
- status: **2023-01-10_GROUP_CLOSED_2_OF_2_AFTER_CROSS_SOURCE_AUDIT / NEXT_2023-01-30_GROUP**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧表示の `docs/real_machine_db/INDEX.md`、最新 `LATEST_HANDOFF.md`、直前No.1543 `沖ドキ！GOLD-30` を確認して開始。
- INDEXは19件の旧表示のためREADME規定どおり、最新handoffとmain実レコードを進捗正本として採用。
- 2022-12-20〜2023-01-09境界をALL7 / K-Navi / 業界導入資料で再確認し、パチスロ本線の追加実導入を固定できなかったため2023-01-10群へ前進。
- No.1544 `SモモキュンソードDX` とNo.1545 `もっと！チバリヨ-25` を性能コア + resetBehavior v0.7で追加。
- ALL7 2023年1月一覧では1/10導入パチスロが両機で一致。K-Naviはモモキュンのみ掲載だが、25Φは1geki/P-WORLD等の25Φ固有DBで実導入2023-01-10を独立確認。追加PB・別型式・25/30Φ派生・地域先行を固定できず、2023-01-10群をCLOSED 2/2とした。

## No.1544 — SモモキュンソードDX
- manufacturer: **DAXEL製造 / 西陣販売**
- formalModel: **SモモキュンソードDX**
- inspectionCode: **230223**
- releaseDate: **2023-01-10**
- generation/system: **6.5号機 / メダルAT / 周期CZ・擬似ボーナス経由**
- payoutRate: **97.9 / 99.3 / 102.5 / 105.2 / 110.0%（設定1/2/4/5/6）**
- AT初当たり: **1/381.2 / 1/342.9 / 1/290.5 / 1/251.8 / 1/228.4**
- 通常時桃剣BONUS: **1/267.7 / 1/259.0 / 1/246.6 / 1/237.9 / 1/234.4**
- baseGamesPer50: **約35.5G/50枚**
- netIncrease: **約5.0枚/G**
- AT初当たり時平均獲得: **約470枚**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_RESET_CORE_WITH_BENEFIT_NUMERIC_AND_GACKUN_UNVERIFIED_AFTER_RESEARCH**

### resetBehavior v0.7 — No.1544
- **設定変更**: 有利区間・周期/天井・内部モードRESET。内部状態は再抽選。周期表示1 / G数表示32へ。
- **据え置き**: 有利区間・周期/天井・モード・状態・表示をCARRY_OVER。
- **純電源OFF→ON**: 天井周期・状態・表示・ステージをCARRY_OVERする解析で一致。
- **天井**: 最大20周期、通常時約760GでAT。
- **リセット専用短縮**: 確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。
- **公開朝一数値**: 周期表示1 / G数表示32。設定変更専用モード振り分け・朝一当選率は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- **変更判別**: 前日表示を把握していれば1/32初期化が材料。有利区間ランプ判別不可。本機固有ガックンは再探索後 `UNVERIFIED_AFTER_RESEARCH`。
- **導入日差**: 業界発表は2023-01-09予定、実導入DB複数は2023-01-10。canonicalは1/10、1/9はPLANNED_DATE_DIFFERENCE。

## No.1545 — もっと！チバリヨ-25
- manufacturer: **オーゼキ製造 / ネット販売**
- formalModel: **SもっとチバリヨGZA**
- inspectionCode: **230114**
- releaseDate: **2023-01-10**
- generation/system: **6.4号機 / 25ΦメダルAT / 擬似ボーナス連チャンタイプ**
- payoutRate: **97.9 / 99.4 / 101.3 / 103.2 / 105.3 / 107.6%（設定1〜6）**
- bonusInitial: **1/255 / 1/252 / 1/237 / 1/224 / 1/211 / 1/202**
- baseGamesPer50: **約33.7G/50枚**
- netIncrease: **約3.0枚/G**
- basicPayout: **BIG 70G 約210枚 / REG 30G 約90枚**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_RESET_CORE_WITH_POWER_CYCLE_AND_GACKUN_UNVERIFIED_AFTER_RESEARCH**

### resetBehavior v0.7 — No.1545
- **設定変更**: 有利区間・天井進行・内部モードRESET / 再抽選。
- **据え置き**: 有利区間・ゲーム数/チェリー天井進行・内部モードCARRY_OVER。
- **純電源OFF→ON**: 25Φ型式固有の直接契約は十分な再探索後も未固定。径非限定/30Φの記述を自動転記しない。
- **通常天井**: 最大900G+α / チェリー最大40回。
- **同一有利区間**: 3回目ボーナスで天国モード移行。
- **朝一/有利区間リセット恩恵**: **53%で天国チャンスモード以上**。
- **個別モード振り分け**: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- **変更判別**: 有利区間ランプ非搭載で判別不可。有利区間継続も見た目で確認不可。本機固有ガックンは `UNVERIFIED_AFTER_RESEARCH`。

## 2023-01-10群 — CLOSED 2/2 canonical actual launch
1. **SモモキュンソードDX（DAXEL / 西陣）** — No.1544 済
2. **もっと！チバリヨ-25（オーゼキ製造 / ネット販売）** — No.1545 済

## 次の既知境界
- 2023-01-11〜2023-01-29をALL7 / K-Navi等で監査。月次導入一覧ではこの期間の新規パチスロ実導入を固定できず、次のknownは2023-01-30。
- 2023-01-30群の既知候補:
  1. **パチスロ モンスターハンターワールド：アイスボーン™**（エンターライズ） ← No.1546候補
  2. **S大花満 / S大花満SB**（ジェイピーエス / PB機） ← 続行候補
- ALL7では両機を2023-01-30掲載。グリーンべるとでは大花満の初期納品分1/30・一般販売4/3を明記しているため、PB初期導入を本DBのactual launchとして1/30に扱う方針。ただし次回は型式・検定番号と段階導入差を個別に再確認する。

## 今回の主要資料
### No.1544
- 遊技通信/P-WORLD業界ニュース: https://news.p-world.co.jp/articles/22197/yugitsushin
- PiDEA検定通過: https://www.pidea.jp/articles/1668388131
- HAZUSE: https://hazuse.com/machine/pachislot/2S0223/
- すろぱちくえすと: https://www.slopachi-quest.com/article/momokyunsord-tenjou/
- パチ＆スロ必勝本 設定変更: https://p.hisshobon.jp/machine/4024/1/92086
- なな徹 朝一: https://nana-press.com/kaiseki/machine/487/13098/
- 1geki 桃剣RUSH: https://1geki.jp/slot/s_momokyun/83/

### No.1545
- Amusement Japan: https://www.amusement-japan.co.jp/article/detail/10003159/
- DreamNews転載: https://www.mapion.co.jp/news/release/dn0000270356-all/
- 1geki 25Φ: https://1geki.jp/slot/s_mtchibariyo25/
- 1geki 天井/設定変更: https://1geki.jp/slot/s_mtchibariyo25/3/
- 1geki モード: https://1geki.jp/slot/s_mtchibariyo25/42/
- P-WORLD 25Φ: https://www.p-world.co.jp/machine/database/9759
- パチ7 ボーナス: https://pachiseven.jp/machines/6757/cutout/8

### 境界監査
- ALL7 2023年1月: https://www.all7.jp/plans/index/2023/01
- K-Navi 2023年1月: https://p-kn.com/calendar/202301/
- グリーンべると / P-WORLD 大花満: https://news.p-world.co.jp/articles/22687/greenbelt
- パチビー モンハン アイスボーン: https://www.pachibee.jp/machines/index/222120000

## 保存コミット
- No.1544追加: `f7eda8d35efbe00cd412b8da90aa2d5f9beb8536`
- No.1545追加: `e77b4fb59be03ae197e8252a32acf227089b4df7`
- handoff更新: 本コミット

## 次回再開地点
**2023-01-11〜01-29境界を最終確認後、2023-01-30群へ進む。No.1546候補は `パチスロ モンスターハンターワールド：アイスボーン™`。続いてPB初期導入 `S大花満 / S大花満SB` を型式・検定番号・1/30初期納品と4/3一般販売の段階導入差を保持して処理する。既存No.1545以前の性能値はやり直さない。**