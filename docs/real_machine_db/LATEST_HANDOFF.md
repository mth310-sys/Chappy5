更新日: 2026-09-14

## 現在地点
- recordCount: **1719**
- latestRecordAdded: **スマスロ マギアレコード 魔法少女まどか☆マギカ外伝 — No.1719**
- latestRecordAddedPath: `docs/real_machine_db/machines/2025-04-07_magia-record.md`
- chronologicalFrontier: **2025-04-07**
- schema: **resetBehavior v0.7**
- status: **2025-04-07_BOUNDARY_CLOSED_4_OF_4_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、No.1716既存レコードを再同期。
- INDEXは旧19件表示のためREADME規定どおりLATEST_HANDOFF + 実レコードを進捗正本として使用。
- No.1716 `スマート沖スロ アメイジングライブ` の次から継続し、2025-04-07群の残り3機を処理。
- No.1717 `Lゴジラ`、No.1718 `Lうしおととら 白面決戦`、No.1719 `スマスロ マギアレコード 魔法少女まどか☆マギカ外伝` を追加。
- 各機種で性能コア、設定変更/据え置き/純電断、天井/ポイント、モード/状態、有利区間、朝一恩恵/不利、変更判別、公開朝一数値を収集。
- 公式/業界/主要解析/旧DB系を横断し、競合は平均化せずCONFLICT、再探索後も固定できない項目はUNVERIFIED_AFTER_RESEARCH / PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCHとした。
- グリーンべるとの2025-04-07新台スケジュールでパチスロ4機（アメイジングライブ / Lゴジラ / Lうしおととら / マギレコ）を再確認。PB・地域先行・別型式を追加で検索し、本線追加対象を確認できなかったため2025-04-07境界をCLOSED 4/4とした。

## No.1717 — Lゴジラ
- path: `docs/real_machine_db/machines/2025-04-07_l-godzilla.md`
- manufacturer: **EXCITE製造 / ニューギン**
- formalModel: **LゴジラNS**
- inspectionCode: **430766**
- releaseDate: **2025-04-07**
- payoutRate: **97.8 / 98.8 / 100.6 / 105.8 / 110.5 / 114.9%**
- AT: **1/680.9 / 1/662.6 / 1/611.0 / 1/511.3 / 1/447.1 / 1/420.4**
- CZ: **1/306.9 / 1/304.0 / 1/303.0 / 1/302.1 / 1/299.6 / 1/295.5**
- base: **約31.6G/50枚** / netIncrease: **約5.0枚/G**
- reset: **AT間最大2500G→1000G+α、Gポイント0、モードC以上濃厚、Gポイント天井最大450pt。探索ZONE 7.0%。**
- firstGameMode: **その他 C96.9%/天国3.1%、弱チェリー・チャンスリプレイ C60.2%/天国39.8%、チャンス目/強チェリー/強チャンスリプレイ 天国100%。**
- carry/power: **据え置きは主要内部値引継ぎ。純電断は天井G/Gポイント/リプレイポイント/モード引継ぎ。純電断の有利区間・開始ステージはUNVERIFIED_AFTER_RESEARCH。**
- conflict: ニューギン公式「リセット後1G目レア小役で天国濃厚」という広い表現と、解析表の弱役39.8%/強役100%を粒度差として保持。

## No.1718 — Lうしおととら 白面決戦
- path: `docs/real_machine_db/machines/2025-04-07_ushio-to-tora-hakumen-kessen.md`
- manufacturer: **アイドル製造 / Daiichi**
- formalModel: **Lうしおととら白面決戦VH**
- inspectionCode: **4S1786**
- releaseDate: **2025-04-07**
- payoutRate: **97.9 / 99.2 / 100.5 / 104.6 / 109.4 / 114.9%**
- AT: **1/397.3 / 1/389.6 / 1/378.0 / 1/365.6 / 1/360.0 / 1/356.1**
- CZ: **1/178.0 / 1/175.6 / 1/169.7 / 1/164.5 / 1/161.9 / 1/159.0**
- base: **約33.0G/50枚** / ST純増約1.2枚/G / BONUS約5.0枚/G
- reset: **CZ天井600G+α→300G。うしとらモード移行までのCZスルー規定回数初期抽選優遇。128G以内CZ時約10%で櫛削りノ儀。**
- setting1 reset skip rule: **0回1.6 / 1回5.1 / 2回27.7 / 3回8.9 / 4回56.7%**
- carry/power: **据え置き・純電断は天井/モード/状態/有利区間を引継ぎ。純電断開始ステージはUNVERIFIED_AFTER_RESEARCH。**

## No.1719 — スマスロ マギアレコード 魔法少女まどか☆マギカ外伝
- path: `docs/real_machine_db/machines/2025-04-07_magia-record.md`
- manufacturer: **ミズホ / ユニバーサルエンターテインメント**
- formalModel: **L／スマスロマギアレコード／RN**
- inspectionCode: **4S1598**
- releaseDate: **2025-04-07**
- payoutRate: **97.6 / 98.9 / 102.0 / 106.0 / 110.4 / 114.9%**
- bonusInitial: **1/240.6 / 1/236.1 / 1/222.8 / 1/208.5 / 1/195.1 / 1/184.3**
- AT: **1/654.6 / 1/633.4 / 1/571.8 / 1/516.6 / 1/456.5 / 1/416.7**
- base: **約32.6G/50枚** / netIncrease: **約2.6枚/G**
- reset: **マギアポイント天井950pt+α→600〜699pt+α。内部状態/魔法少女モード/穢れをRESET・再抽選。有利区間RESET。**
- resetHighStateTotal: **設定1/2 25.0%、3 27.7%、4 29.3%、5 30.5%、6 33.7%**。10/20/30Gの設定別内訳も実レコードへ保存。
- carry/power: **据え置き/純電断は内部天井ポイント、状態、魔法少女モード、穢れ、有利区間を引継ぎ。マギアポイント表示は設定変更/純電断とも???。**
- detection: **朝一699pt+α超でボーナス非当選なら据え置き濃厚材料。ガックンUNVERIFIED_AFTER_RESEARCH。**
- conflict: **1gekiの「内部ポイント規定650pt」簡略表記 vs 天井詳細・必勝本・なな徹等の600〜699pt+α。複数一致の600〜699pt+αをcanonical。**

## 2025-04-07境界 — CLOSED 4/4 canonical
1. スマート沖スロ アメイジングライブ — No.1716 DONE
2. Lゴジラ — No.1717 DONE
3. Lうしおととら 白面決戦 — No.1718 DONE
4. スマスロ マギアレコード 魔法少女まどか☆マギカ外伝 — No.1719 DONE

## 次の境界 — 2025-04-21 OPEN 0/3 known canonical
グリーンべると2025-04-07更新の新台スケジュール、ALL7等で次のパチスロ本線を確認。
1. 吉宗 — NEXT
2. スマスロ アイドルマスター ミリオンライブ！ ネクストプロローグ
3. L麻雀物語

## 次回再開地点
- 最新mainを再同期しNo.1719と本handoffを確認。
- **No.1720候補 `吉宗` — 2025-04-21** から再開する。
- その後 `スマスロ アイドルマスター ミリオンライブ！ ネクストプロローグ` → `L麻雀物語` を同一キューで処理。
- 3機処理後、PB・地域先行・別型式・延期/段階導入を再監査して2025-04-21境界をCLOSED判定する。
- 各機種は設定変更/据え置き/電源OFF→ON、ゲーム数/ポイント/天井、モード/状態、有利区間、朝一恩恵/不利、変更判別、公開朝一数値を独立管理する。
- PARTIAL/UNVERIFIEDは表記揺れ・正式型式・メーカー・シリーズ名、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間へ検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料横断後のみ確定する。

## resetBehavior 遡及QA
- 既処理確認済みカーソル: `2007-07-09_genju-haou-t.md`（幻獣覇王T）。
- 今回は新規収集を優先。既存旧レコードを推測更新していない。
- 次回も新規収集を止めず、実体レコード順から最初のresetBehavior欠損レコードを確定して遡及更新する。
- 既存COMPLETE_COREの性能完了判定は変更しない。reset QA状態を別管理する。

## 今回の主要ソース
取得日: 2026-09-14
- グリーンべると 2025-04-07新台スケジュール: https://news.p-world.co.jp/articles/30646/greenbelt
- ニューギン公式 Lゴジラ: https://www.newgin.co.jp/devfaq/6402/
- ニューギン公式 Lゴジラ reset: https://www.newgin.co.jp/devfaq/6465/
- なな徹 Lゴジラ朝一: https://nana-press.com/kaiseki/machine/919/28865/
- Daiichi公式 うしおととら: https://daiichi777.jp/pachislot/slot_ushitora2/
- ちょんぼりすた うしおととら: https://chonborista.com/slot/d-light/229780/
- ユニバーサル公式 マギレコ: https://www.universal-777.com/product/slot/magireco/
- 必勝本 マギレコ天井/設定変更: https://hisshobon.com/machineinfo/86129/
- なな徹 マギレコ朝一: https://nana-press.com/kaiseki/machine/914/28429/
- HAZUSE マギレコ型式: https://hazuse.com/machine/pachislot/4S1598/
- ALL7 2025年4月導入一覧: https://www.all7.jp/plans/index/2025/04
