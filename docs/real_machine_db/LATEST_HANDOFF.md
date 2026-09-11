更新日: 2026-09-12

## 現在地点
- recordCount: **1427**
- latestRecordAdded: **GⅠ優駿倶楽部3 — No.1427**
- latestRecordAddedPath: `docs/real_machine_db/machines/2021-08-02_g1-yushun-club-3.md`
- chronologicalFrontier: **2021-08-02**
- frontierLatestMachine: **GⅠ優駿倶楽部3 — No.1427**
- schema: **resetBehavior v0.7**
- status: **2021-08-02_GROUP_CLOSED_4_OF_4_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前No.1426「パチスロコードギアス 反逆のルルーシュ3」を確認して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり `LATEST_HANDOFF.md` とmain実レコードを正本として進捗判定。
- 2021-08-02群の4機目としてNo.1427「GⅠ優駿倶楽部3」を追加。
- 2021-08-02群は **SLOT劇場版魔法少女まどか☆マギカ[前編]始まりの物語／[後編]永遠の物語 / もっと！クレアの秘宝伝 女神の歌声と太陽の子供達 / パチスロコードギアス 反逆のルルーシュ3 / GⅠ優駿倶楽部3** の4ユニーク機を処理完了。
- 当時新台カレンダーを別系統で再監査し、2021-08-02掲載が上記4機で一致し、次の主要導入日が2021-09-06へ進むことを確認。PB・地域先行・別型式・延期差も検索したが追加候補を固定できなかったため、2021-08-02群を **CLOSED** とした。

## No.1427 — GⅠ優駿倶楽部3
- path: `docs/real_machine_db/machines/2021-08-02_g1-yushun-club-3.md`
- manufacturer: **KPE（コナミアミューズメントブランド）**
- formalModel: **S GⅠ優駿倶楽部3PK**
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- releaseDate: **2021-08-02**
- generation/system: **6.1号機 / AT（擬似ボーナス経由・ゲーム数上乗せ型AT）**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.5 / 98.8 / 101.0 / 104.3 / 106.3 / 108.6%**
- ボーナス合算: **1/294 / 1/289 / 1/285 / 1/278 / 1/273 / 1/267**
- baseGamesPer50: **約37G/50枚**
- netIncrease: **約3.0枚/G**
- basicPayout: **クラシックボーナス約150枚 / まいまい☆ぼーなす約80枚**
- normalCeiling: **有利区間移行後666G → 勝利濃厚の新馬戦 / クラシックボーナス濃厚**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_PUBLIC_RESET_CORE**

### resetBehavior v0.7 — No.1427
- **設定変更**: 天井RESET、内部状態RESET、有利区間RESET。新規有利区間の通常天井666Gを再カウント。
- **据え置き/純電源OFF→ON**: 天井・内部状態・進行中有利区間をCARRY_OVER。設定変更を伴わない純電断では新規有利区間への強制移行なし。
- **天井**: 通常は有利区間移行後666G。設定変更専用の固定短縮天井は確認できず。マコマコブラックによる111/333/555G等の短縮抽選は通常運用でも起こる別機構として分離。
- **朝一/新規有利区間恩恵**: 1周期目はブリードゾーン後に南国ゾーンへ移行し、新馬戦勝率/ボーナス期待度約33%以上。有利区間開始時のレア役成立時は約20%でUMAチャンス。
- 上記約33%・約20%は『設定変更専用抽選値』ではなく、新規有利区間移行時共通の公開値として区別して保存。
- **変更判別**: 設定変更時は有利区間ランプ消灯だが、本機は通常時消灯型のため朝一ランプ単独では変更判別不可。朝一1周期目に南国ゾーンへ入らなければ据え置き濃厚とする解析資料は、確定条件ではなく推測材料として保持。
- 設定変更後の液晶開始ステージ、本機固有ガックン、設定変更専用の独立モード/状態初期振り分け、専用初当たり率、検定番号は、表記・検索語・資料系統を変えて再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 市場上はコナミアミューズメント表記が多い一方、P-WORLD等で製造KPEを確認したため `manufacturer=KPE / brandContext=コナミアミューズメント` と分離。
- 初期資料のUMAチャンス成功時2400枚濃厚表現は後年訂正と競合するため、2400枚保証として性能コアへ採用していない。

## 2021-08-02群 — CLOSED
1. **SLOT劇場版魔法少女まどか☆マギカ[前編]始まりの物語／[後編]永遠の物語 — No.1424 / DONE**
2. **もっと！クレアの秘宝伝 女神の歌声と太陽の子供達 — No.1425 / DONE**
3. **パチスロコードギアス 反逆のルルーシュ3 — No.1426 / DONE**
4. **GⅠ優駿倶楽部3 — No.1427 / DONE**
- 当時新台カレンダー複数系統で同日4機が一致。PB・地域先行・別型式・延期/段階導入も再探索したが追加候補を固定できずCLOSED。

## 次回本線の再開地点
- 最新main再同期後、**2021-09-06群の先頭候補「パチスロ うしおととら 雷槍一閃」No.1428候補**から継続。
- 2021-09-06群の既知キュー: **パチスロ うしおととら 雷槍一閃 / 麻雀物語4 / パチスロ楽園追放 / ロリクラ☆ほーるど！**。
- 各機処理後、全メーカー・別型式/PB・地域先行・延期/段階導入を再監査してCLOSED可否を判定する。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 直前処理済み: `docs/real_machine_db/machines/2007-05_harem-ace.md`（もえろ!ハーレムエース）→ **PARTIAL_RESEARCH_EXHAUSTED**。
- 既存性能コアは不用意にやり直さず、reset側のみ正式再探索する。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-05_sangokushi-igt.md`（三國志 / IGTジャパン）**。

## GitHub保存
- No.1427追加 commit: `a822ffcbfa5df37275764dc31dafa28c33bbfd4d`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-12
### No.1427 GⅠ優駿倶楽部3
- https://www.konami.com/amusement/psm/slot/g1-dclub3/
- https://www.4gamer.net/games/999/G999905/20210721187/
- https://web-greenbelt.jp/post-47409/
- https://www.p-world.co.jp/machine/database/9405
- https://p-kn.com/slot/3611/
- https://1geki.jp/slot/s_g1_3/3/
- https://1geki.jp/slot/s_g1_3/0/
- https://chonborista.com/slot/konami-slot/140131/
- https://slot-seven.com/g1derbyclub3-tenzyou/
- https://kanzenkokuchi.jp/news/2376.php
- https://nana-press.com/kaiseki/machine/136/4485/
- https://nana-press.com/kaiseki/machine/136/
- https://ichikatsu.com/newslot/

### 次回境界 2021-09-06
- https://ichikatsu.com/newslot/
- https://crankyseven-k.com/kaiseki-calendar/2021-9-6/
