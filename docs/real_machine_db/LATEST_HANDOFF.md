更新日: 2026-09-12

## 現在地点
- recordCount: **1424**
- latestRecordAdded: **SLOT劇場版魔法少女まどか☆マギカ[前編]始まりの物語／[後編]永遠の物語 — No.1424**
- latestRecordAddedPath: `docs/real_machine_db/machines/2021-08-02_slot-madoka-magica-movie-beginnings-eternal.md`
- chronologicalFrontier: **2021-08-02**
- frontierLatestMachine: **SLOT劇場版魔法少女まどか☆マギカ[前編]始まりの物語／[後編]永遠の物語 — No.1424**
- schema: **resetBehavior v0.7**
- status: **2021-08-02_GROUP_OPEN_1_OF_4_KNOWN_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前No.1423「パチスロ東京レイヴンズ」を確認して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり `LATEST_HANDOFF.md` とmain実レコードを正本として進捗判定。
- 開始時点でmainはNo.1423 / 2021-07-19群CLOSEDまで進行済みだったため、過去チャットの古い再開地点には戻らずhandoff指定の2021-08-02群から継続。
- 2021-08-02群の先頭としてNo.1424「SLOT劇場版魔法少女まどか☆マギカ[前編]始まりの物語／[後編]永遠の物語」を追加。
- 2021-08-02群は複数導入日資料から、少なくとも **まどか前後編 / もっと！クレアの秘宝伝 女神の歌声と太陽の子供達 / パチスロコードギアス 反逆のルルーシュ3 / GI優駿倶楽部3** の4ユニーク機を確認。現時点1/4処理済みでOPEN。

## No.1424 — SLOT劇場版魔法少女まどか☆マギカ[前編]始まりの物語／[後編]永遠の物語
- path: `docs/real_machine_db/machines/2021-08-02_slot-madoka-magica-movie-beginnings-eternal.md`
- manufacturer: **ミズホ**
- formalModel: **S/劇場版まどか/KK**
- certificationNumber: **1S0068**
- releaseDate: **2021-08-02**
- generation/system: **6.1号機 / AT**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- AT firstHit: **1/269.4 / 1/251.3 / 1/241.9 / 1/222.2 / 1/205.5 / 1/188.8**
- payoutRate: **97.3 / 99.8 / 102.0 / 104.1 / 107.1 / 110.0%**
- baseGamesPer50: **約39G/50枚（約39.1G表記あり）**
- AT純増: **約2.5枚/G**
- basicPayout: **マギカラッシュ初期100枚以上 / BIG 30G / EPISODE BONUS 50G**
- normalCeiling: **最大700G（解析上659G+前兆。特殊モードは699G+前兆付近の別表現あり）**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_PUBLIC_RESET_CORE**

### resetBehavior v0.7 — No.1424
- 設定変更時は **天井RESET / 内部モード再抽選 / 内部状態RESET / 有利区間RESET** を当時解析で確認。
- 据え置き・純電断では **天井 / 内部モード / 有利区間をCARRY_OVER**。
- 通常時は有利区間ランプ基本消灯型のため **朝一消灯だけでは設定変更判別不可**。朝一から点灯なら据え置き濃厚材料。
- 設定変更専用の固定短縮天井、専用モード振り分け、AT直撃保証、朝一当選率は表記揺れ・型式・メーカー・シリーズ名とリセット/朝一/据え置き/電断/天井/モード/有利区間を組み替えて再探索したが固定できず、一般論で補完していない。
- 設定1機械割はP-WORLD/K-Navi/なな徹等の **97.3%** が複数系統で一致。一部二次資料に **97.9%** があるため平均せず `CONFLICT_SECONDARY_TABLE` として保持。
- 本機固有ガックン条件・発生率は十分な再探索後も直接資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。

## 2021-08-02群 — OPEN
1. **SLOT劇場版魔法少女まどか☆マギカ[前編]始まりの物語／[後編]永遠の物語 — No.1424 / DONE**
2. **もっと！クレアの秘宝伝 女神の歌声と太陽の子供達 — NEXT / No.1425候補**
3. **パチスロコードギアス 反逆のルルーシュ3 — PENDING**
4. **GI優駿倶楽部3 — PENDING**
- 4機処理後、全メーカー・別型式/PB・地域先行・延期/段階導入を再監査してCLOSED可否を判定する。

## 次回本線の再開地点
- 最新main再同期後、**2021-08-02群の次の未処理「もっと！クレアの秘宝伝 女神の歌声と太陽の子供達」No.1425候補**から継続。
- その後、コードギアス3 → GI優駿倶楽部3の未処理順を再監査して進める。
- 同日群は全メーカー・別型式/PB・地域先行・延期/段階導入まで再監査してCLOSED可否を判定する。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 直前処理済み: `docs/real_machine_db/machines/2007-05_harem-ace.md`（もえろ!ハーレムエース）→ **PARTIAL_RESEARCH_EXHAUSTED**。
- 既存性能コアは不用意にやり直さず、reset側のみ正式再探索する。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-05_sangokushi-igt.md`（三國志 / IGTジャパン）**。

## GitHub保存
- No.1424追加 commit: `981f4d03c3a0aed90d5ffe4c45dd3a907c0bd68b`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-12
### No.1424 まどか前後編
- https://www.p-world.co.jp/machine/database/9413
- https://yugi-nippon.com/pachinko-new-machine/post-45013/
- https://news.p-world.co.jp/articles/17121/greenbelt
- https://web-greenbelt.jp/post-49389/
- https://p-kn.com/slot/3620/
- https://nana-press.com/kaiseki/machine/140/4212/
- https://slotjin.com/tenjoukitaichi/madokazenkouhen/
- https://slot-seven.com/madokamagica4-tenzyou/
- https://chonborista.com/slot/universal-slot/141931/
- https://web-greenbelt.jp/post-47595/

### 次回境界 2021-08-02
- https://ichikatsu.com/newslot/
- https://p-kn.com/slot/3611/
- https://www.4gamer.net/games/999/G999905/20210721187/
