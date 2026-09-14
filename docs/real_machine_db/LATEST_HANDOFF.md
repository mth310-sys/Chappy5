更新日: 2026-09-14

## 現在地点
- recordCount: **1739**
- latestRecordAdded: **わたしの幸せな結婚 — No.1739**
- latestRecordAddedPath: `docs/real_machine_db/machines/2025-07-07_watashi-no-shiawase-na-kekkon.md`
- chronologicalFrontier: **2025-07-07**
- schema: **resetBehavior v0.7**
- status: **2025-07-07_GROUP_OPEN_2_OF_5_KNOWN_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前No.1737実レコードを再同期。
- INDEXは旧スナップショットのため、README規定どおりLATEST_HANDOFF + 実レコードを進捗正本として使用。
- No.1738 `LBパチスロ ヱヴァンゲリヲン ～約束の扉～` を追加し、性能コア + resetBehavior v0.7を保存。
- No.1739 `わたしの幸せな結婚` を追加し、性能コア + resetBehavior v0.7を保存。
- 2025-07-07群は既知5候補中2機処理済み。残りは `アレックス ブライト → ハイビリターン-30 → LBトリプルクラウン`。

## No.1738 — LBパチスロ ヱヴァンゲリヲン ～約束の扉～
- path: `docs/real_machine_db/machines/2025-07-07_lb-evangelion-yakusoku-no-tobira.md`
- manufacturer: **ビスティ（ブランド） / SANKYO（製造・型式）**
- formalModel: **LBエヴァンゲリオンsR**
- inspectionCode: **530121**
- releaseDate: **2025-07-07**
- payoutRate: **97.7 / 98.9 / 100.7 / 104.5 / 107.0 / 110.0%**
- bonusCombined: **1/196.8 / 1/189.4 / 1/181.0 / 1/170.7 / 1/161.4 / 1/151.0**
- BB合算: **1/300.6 / 1/290.0 / 1/281.3 / 1/266.4 / CONFLICT 1/254.0 vs 1/251.0 / 1/240.9**
- REG: **1/569.9 / 1/546.1 / 1/508.0 / 1/474.9 / 1/442.8 / 1/404.5**
- base: **約41G（HAZUSE/P-WORLD） / 40.4G（後発ベース一覧）**
- basicPayout: **SBB最大203枚+BT / BIG最大203枚 / REG最大107枚 / 暴走モード最大96枚+BT**
- 天井: **非搭載**
- coreStatus: **COMPLETE_CORE_WITH_BASE_ROUNDING_AND_BB_SETTING5_CONFLICT**

### No.1738 resetBehavior v0.7
- 設定変更時はカスタムRESET、開始ステージは実戦上司令室。
- 天井非搭載のため、ゲーム数天井リセット/短縮はNOT_APPLICABLE。
- 朝一専用モード、高確、初当たり優遇率などは再探索後も確定公開値なし。
- 必勝本の設定変更/電源OFF-ON比較表では純電断側カスタム・ステージは `現在調査中`。特殊途中状態の純電断復帰仕様はUNVERIFIED_AFTER_RESEARCH。
- 設定変更/据え置き/純電断それぞれの本機固有有利区間内部契約は高優先機種別資料で固定できず、一般論から補完していない。
- ガックン条件/発生率は検索語変更後もUNVERIFIED_AFTER_RESEARCH。
- 設定5 BB合算 `1/254.0 vs 1/251.0` は平均せずCONFLICT。

## No.1739 — わたしの幸せな結婚
- path: `docs/real_machine_db/machines/2025-07-07_watashi-no-shiawase-na-kekkon.md`
- manufacturer: **KPE（製造） / コナミアミューズメント（販売・ブランド）**
- formalModel: **Lわたしの幸せな結婚PN**
- inspectionCode: **5S0052**
- releaseDate: **2025-07-07**
- payoutRate: **97.9 / 98.7 / 100.4 / 105.1 / 108.0 / 112.0%**
- bonusInitialHit: **1/290.8 / 1/286.5 / 1/277.3 / 1/255.3 / 1/251.4 / 1/249.4**
- AT初当り: **1/594.3 / 1/583.4 / 1/558.8 / 1/494.7 / 1/484.3 / 1/479.4**
- base: **約33.8G/50枚**
- netIncrease: **夢幻RUSH約2.2枚/G / 擬似ボーナス約4.2枚/G**
- basicPayout: **わた婚BONUS 25G / EPISODE BONUS 25G / CZ 3G+α・成功期待度約40% / AT初期50G+α**
- coreStatus: **COMPLETE_CORE**

### No.1739 resetBehavior v0.7
- 設定変更: **有利区間RESET / 天井RESET / 内部モードRESET**。
- 電源OFF→ON: **有利区間CARRY_OVER / 天井CARRY_OVER / 内部モードCARRY_OVER**。
- ボーナス間天井: **通常最大800G+α → 設定変更後350G+α**。
- ボーナススルー天井: **通常6スルー後7回目 → 設定変更後最大5スルー**。
- 設定変更後モード振り分け: **通常C 94.9% / 天国 4.7% / 超天国 0.4%**。
- 通常C天井350G+α、天国/超天国100G+α。
- 朝一350G+αを超えてボーナス非当選なら据え置き濃厚材料。
- 1G目にガックンすれば設定変更濃厚（ホール側対策なしの場合）。ガックン発生率は公開値未確認。
- 内部モードは純電断CARRY_OVERを直接確認。一方、モード以外の内部状態については別資料で電断側 `調査中` のためPARTIALとして分離管理。

## 2025-07-07境界 — OPEN 2/5 known canonical
1. LBパチスロ ヱヴァンゲリヲン ～約束の扉～ — No.1738 DONE
2. わたしの幸せな結婚 — No.1739 DONE
3. アレックス ブライト — NEXT
4. ハイビリターン-30 — QUEUED
5. LBトリプルクラウン — QUEUED

boundaryAudit:
- 直前handoffで1geki/P-Summa/情報島から2025-07-07の既知パチスロ5機を確認済み。
- 5機処理完了後にPB・別型式・地域先行・延期/段階導入を再監査し、境界をCLOSED判定する。

## 次回再開地点
- 最新mainを再同期しNo.1738/1739と本handoffを確認。
- **No.1740候補「アレックス ブライト」— 2025-07-07** から開始する。
- その後 `ハイビリターン-30 → LBトリプルクラウン`。
- 各機種は性能コアに加え、設定変更/据え置き/電源OFF→ON、ゲーム数/天井、モード/状態、有利区間、朝一恩恵/不利、変更判別、公開朝一数値を独立管理する。
- PARTIAL/UNVERIFIEDは表記揺れ・正式型式・メーカー・シリーズ名、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間へ検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料横断後のみ確定する。

## resetBehavior 遡及QA
- 既処理確認済みカーソル: `2007-07-09_genju-haou-t.md`（幻獣覇王T）。
- 今回は本線No.1738〜1739を完了。旧レコード側QAカーソルは据え置き。
- 既存COMPLETE_COREの性能完了判定は変更しない。reset QA状態を別管理する。

## 今回の主要ソース
取得日: 2026-09-14

### No.1738 LBパチスロ ヱヴァンゲリヲン ～約束の扉～
- SANKYOオンライン博物館: https://www.sankyo-fever.jp/collection/983/
- グリーンべると 検定通過: https://web-greenbelt.jp/post-95832/
- HAZUSE: https://hazuse.com/hd/530121-2/
- P-WORLD: https://www.p-world.co.jp/machine/database/10301
- パチビー: https://www.pachibee.jp/machines/index/225060001
- 情報島: https://p-johojima.jp/machine_spec/post-9186/
- 1geki: https://1geki.jp/slot/lb_eva/
- 必勝本 天井&設定変更: https://p.hisshobon.jp/machine/4546/1/110184
- P-Summa ベース一覧: https://psumma.jp/pachislo/70025/

### No.1739 わたしの幸せな結婚
- コナミアミューズメント公式: https://www.konami.com/amusement/corporate/ja/topics/20250414/
- 公式機種サイト: https://www.konami.com/amusement/psm/slot/watakon/00_top.html
- 情報島 検定通過: https://p-johojima.jp/new_machine/post-4006/
- HAZUSE: https://hazuse.com/machine/pachislot/5S0052/
- P-WORLD: https://www.p-world.co.jp/machine/database/10270
- 必勝本 基本スペック: https://hisshobon.com/machineinfo/87175/
- すろぱちくえすと 天井/朝一/リセット: https://www.slopachi-quest.com/article/watasinosiawasenakekkon-tenjou/
- Altema 朝一リセット: https://altema.jp/pachimo/lwatakonreset
- 6確: https://www.kaku6.jp/slot/watakon/
