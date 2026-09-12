更新日: 2026-09-12

## 現在地点
- recordCount: **1435**
- latestRecordAdded: **パチスロツインエンジェルPARTY — No.1435**
- latestRecordAddedPath: `docs/real_machine_db/machines/2021-10-04_twin-angel-party.md`
- chronologicalFrontier: **2021-10-04**
- frontierLatestMachine: **パチスロツインエンジェルPARTY — No.1435**
- schema: **resetBehavior v0.7**
- status: **2021-10-04_GROUP_OPEN_2_OF_5_KNOWN_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前No.1434「ファンキージャグラー2」を確認して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり `LATEST_HANDOFF.md` とmain実レコードを正本として進捗判定。
- handoff指定どおりNo.1435「パチスロツインエンジェルPARTY」を追加。
- 2021-10-04群は既知5機のうち2機処理済み。残りはタブー・タトゥー / ニューパルサーDX3 / かまいたちの夜。
- 遡及resetBehavior QAは本線を優先し、カーソル `2007-05_kemonocchi.md`（けものっち!）を維持。

## No.1435 — パチスロツインエンジェルPARTY
- path: `docs/real_machine_db/machines/2021-10-04_twin-angel-party.md`
- manufacturer: **サミー**
- formalModel: **S ツインエンジェル PARTY ZF**
- certificationNumber: **1S0682**
- releaseDate: **2021-10-04**
- generation/system: **6.1号機 / A+AT / リアルボーナス+AT**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.9 / 99.8 / 101.4 / 106.1 / 108.1 / 111.2%**
- bonusCombined: **1/199.8 / 1/192.8 / 1/186.2 / 1/180.0 / 1/174.3 / 1/168.9**
- angelChanceTOTAL: **1/192.6 / 1/193.4 / 1/179.0 / 1/179.8 / 1/162.8 / 1/167.1**
- dateTimeTOTAL: **1/496.1 / 1/444.1 / 1/437.9 / 1/364.3 / 1/361.1 / 1/306.0**
- baseGamesPer50: **約35.6G/50枚**
- netIncrease: **AT約2.0枚/G**
- basicPayout: **HBB約150枚+DT / BIG+AC平均約164枚 / MB約50枚+AT抽選 / DT1セット50枚以上**
- normalCeiling: **有利区間移行後555G+α → デートタイム**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_PUBLIC_RESET_CORE**

### resetBehavior v0.7 — No.1435
- **設定変更**: 天井/内部状態RESET。通常555G+αの天井が **333G+α**へ短縮し、内部的にデートタイム直撃高確からスタート。
- **据え置き/純電源OFF→ON**: 天井・内部状態CARRY_OVER。
- **ゲーム数/天井**: 通常555G+α、リセット333G+α。短縮幅222G。
- **追加朝一契約**: リセット333G天井からDT突入後、DT終了までにボーナスまたはチャンスチェリー非当選なら、次回天井も333G+αが再セットされる公開情報あり。
- **有利区間**: 設定変更ではRESET相当、据え置き/電断ではCARRY_OVERとして記録。ただしメーカー一次表でその文言を直接固定できなかったためレコード内に注記。
- **朝一恩恵**: 333G天井短縮 + DT直撃高確スタート。
- **朝一不利**: 主要な設定変更固有不利は確認なし。
- **変更判別**: 通常時は有利区間ランプ基本消灯。消灯だけでは判別不可、点灯なら据え置き濃厚。複数攻略資料にガックン判別可能との記載があるが、本機固有発生率/保証条件はUNVERIFIED_AFTER_RESEARCH。
- **公開朝一数値**: 天井555G+α→333G+α（222G短縮）。DT直撃高確の設定変更専用当選率/転落率は固定できずUNVERIFIED_AFTER_RESEARCH。

### CONFLICT
- エンジェルチャンスTOTAL設定6は、当時業界記事/P-BOMB/1geki/パチマガスロマガ/P-WORLDで **1/167.1** が一致するためcanonical。
- なな徹には **1/167.8** 表記があるため平均せずCONFLICT保持。

## 2021-10-04群 — OPEN
1. **ファンキージャグラー2 — No.1434 / DONE**
2. **パチスロツインエンジェルPARTY — No.1435 / DONE**
3. **パチスロ タブー・タトゥー — No.1436候補 / NEXT**
4. **ニューパルサーDX3 — No.1437候補 / QUEUED**
5. **パチスロ かまいたちの夜 — No.1438候補 / QUEUED**
- 群末尾で全メーカー・PB・地域先行・30Φ/別型式・延期/段階導入を再監査し、追加未処理がなければCLOSEDへ移行する。

## 次回本線の再開地点
- **2021-10-04群 / No.1436候補: パチスロ タブー・タトゥー**。
- 性能コア＋resetBehavior v0.7を収集し、既存No.1434〜1435を無駄に再調査しない。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 前回処理済み: `docs/real_machine_db/machines/2007-05_kidou-keisatsu-patlabor-x.md`（機動警察パトレイバーX）→ **PARTIAL_RESEARCH_EXHAUSTED**。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-05_kemonocchi.md`（けものっち!）**。

## GitHub保存
- No.1435追加 commit: `7afd11e9f0524096e2c74ac45715b29b1eb7e076`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-12
### No.1435 パチスロツインエンジェルPARTY
- https://news.p-world.co.jp/articles/18030/nippon
- https://news.p-world.co.jp/articles/17453/nippon
- https://p-bomb.co.jp/industry/new-machine/1580/
- https://hazuse.com/machine/pachislot/1S0682/genre/201/
- https://p.hisshobon.jp/machine/3686/1/84385
- https://www.slopachi-quest.com/article/twinangel-party-tenjou/
- https://nana-press.com/kaiseki/machine/147/5190/
- https://nana-press.com/kaiseki/machine/147/5194/
- https://nana-press.com/kaiseki/machine/147/5187/
- https://pachiseven.jp/machines/6396/cutout/3
- https://www.slopachi-quest.com/article/resets/

### 2021-10-04群境界（継続）
- https://ichikatsu.com/newslot/
- https://news.p-world.co.jp/articles/18030/nippon
- https://lon-lon.jp/senkawa/10%E6%9C%88%E6%96%B0%E8%A3%85%E9%96%8B%E5%BA%97%E2%91%A0/
