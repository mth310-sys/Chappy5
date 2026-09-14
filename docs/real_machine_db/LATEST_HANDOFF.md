更新日: 2026-09-14

## 現在地点
- recordCount: **1678**
- latestRecordAdded: **今日から俺は!! パチスロ編 — No.1678**
- latestRecordAddedPath: `docs/real_machine_db/machines/2024-10-07_kyou-kara-ore-wa-pachislot-hen.md`
- chronologicalFrontier: **2024-10-07**
- schema: **resetBehavior v0.7**
- status: **2024-10-07_GROUP_OPEN_3_OF_AT_LEAST_5_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直近No.1677を再同期。INDEXは旧19件表示のためREADME規定どおりLATEST_HANDOFF + 実レコードを進捗正本として使用。
- No.1677 `スマスロ頭文字D 2nd` の次の未処理機種として、No.1678 `今日から俺は!! パチスロ編` を性能コア + resetBehavior v0.7で登録。
- コナミアミューズメント公式で機種存在、G-net/HAZUSEで2024-10-07導入、型式 `L今日から俺は！！FE`、検定番号 `4S0633` を確認。2024-07-19遊技日本/P-WORLDのみ `L今日から俺は!!FN` と記載するため型式CONFLICTを保持し、販売概要/検定DB系の `FE` をcanonicalとした。
- メーカー/ブランドはG-net販売資料の `ファイトクラブ（コナミアミューズメント）` を採用。
- 設定1〜6のBIG 1/410.0 / 1/398.6 / 1/384.4 / 1/354.5 / 1/329.7 / 1/303.7、REG 1/457.0 / 1/447.2 / 1/434.8 / 1/412.2 / 1/386.5 / 1/365.4、合算 1/216.1 / 1/210.7 / 1/204.0 / 1/190.6 / 1/177.9 / 1/165.8、機械割97.9 / 99.0 / 100.5 / 104.1 / 108.0 / 113.0%を複数資料で一致確認。
- ベースはHAZUSE/パチセブン/一撃で約34.5G/50枚、G-net販売概要は35.4Gのため `CONFLICT_BASE_34_5_VS_35_4`。複数解析一致の34.5Gをcanonical。
- 擬似ボーナス純増約6.0枚/G。BIGは450/500/550/600枚（平均約500枚）、REG約104枚。
- 通常天井最大1280G+α。設定変更後はモードB以上となり最大768G+αへ短縮。
- 設定変更時は当該〜次々回まで3回分のモードを抽選し、初当たり3回目まで1/248.1に優遇。設定変更後1回目BIGのツッパリロード当選率は約45%。設定変更後256G以内ボーナス期待度約60%とする解析も確認。
- ちょんぼりすた比較表で設定変更時は天井/内部状態RESET、電源OFF→ON時は天井/内部状態CARRY_OVER。ガックンは設定変更時あり、電源OFF→ON時なし。
- 据え置き専用の全内部契約（3回分モード/REG連続回数/逆襲システム進行等）は高信頼資料で一括固定できず、主要カウンタ引継ぎと細部を分離して記録。
- 本機固有の有利区間設定変更/据え置き/純電断契約は、正式型式FE/FN、設定変更/リセット/据え置き/電源OFF ON/有利区間等へ検索語を変え、公式・必勝本・なな徹・一撃・ちょんぼりすた・旧DB系を横断しても高信頼の直接明記を固定できず `UNVERIFIED_AFTER_RESEARCH`。一般仕様から推測転記していない。
- 2024-10-07境界を再監査し、`L 真・一騎当千` は必勝本/HAZUSE/一撃で2024-10-07全国導入を確認。型式 `Lパチスロ真・一騎当千V`、検定番号 `430303`。次のcanonical候補として確定。
- `トリプルクラウンフォーユー` はHAZUSEで2024-10-07導入記載があるが、30φ・地域/段階流通差の監査を残すため境界はOPEN継続。

## No.1678 — 今日から俺は!! パチスロ編
- path: `docs/real_machine_db/machines/2024-10-07_kyou-kara-ore-wa-pachislot-hen.md`
- manufacturer: **ファイトクラブ / コナミアミューズメント**
- formalModel: **L今日から俺は！！FE**
- inspectionCode: **4S0633**
- releaseDate: **2024-10-07**
- generation: **6.5号機 / スマスロ**
- systemType: **AT / 擬似ボーナス**
- payoutRate: **97.9 / 99.0 / 100.5 / 104.1 / 108.0 / 113.0%**
- bonusCombined: **1/216.1 / 1/210.7 / 1/204.0 / 1/190.6 / 1/177.9 / 1/165.8**
- base: **約34.5G/50枚 canonical（G-net 35.4GとCONFLICT）**
- netIncrease: **約6.0枚/G**
- normalCeiling: **最大1280G+α**
- resetCeiling: **最大768G+α / モードB以上**
- settingChange: **天井・内部状態RESET、3回分モード抽選、初当たり3回目まで優遇**
- carryOver: **主要内部進行は引継ぎ側、全項目の機種固有一括契約は一部UNVERIFIED**
- powerCycle: **天井・内部状態CARRY_OVER / ガックンなし**
- advantageousSection: **UNVERIFIED_AFTER_RESEARCH**
- detection: **設定変更時ガックンあり / 電源OFF→ON時なし。対策可能のため確定判別扱いしない**

## 2024-10-07境界 — OPEN
1. スマスロ 鬼武者3 — No.1676 DONE
2. スマスロ頭文字D 2nd — No.1677 DONE
3. 今日から俺は!! パチスロ編 — No.1678 DONE
4. L 真・一騎当千 — NEXT / 2024-10-07全国導入確認済み / `Lパチスロ真・一騎当千V` / `430303`
5. トリプルクラウンフォーユー — HAZUSE 2024-10-07, `SトリプルクラウンX2-30`, `4S0038`; 30φ・地域/段階導入監査要
- グリーンべると/P-WORLD主要全国スケジュールとHAZUSE/メーカー別一覧で差があるため、PB・地域先行・別型式・延期を再監査してからCLOSED判定する。

## resetBehavior 遡及QA
- 既処理確認済みカーソル: `2007-07-09_genju-haou-t.md`（幻獣覇王T）。
- 新規時系列収集を優先し、今回も旧レコードへの推測更新は実施していない。

## 次回再開地点
- 最新mainを再同期しNo.1678と本handoffを確認。
- **No.1679候補 `L 真・一騎当千` — 2024-10-07** を性能コア + resetBehavior v0.7で収集。
- 確認済み識別情報: `Lパチスロ真・一騎当千V` / 検定番号 `430303` / Daiichi / 2024-10-07。
- その後 `トリプルクラウンフォーユー` の30φ・地域/段階導入を監査し、同日canonical採否を確定。
- 2024-10-07境界を閉じる前にメーカー別一覧・当時新台カレンダー・HAZUSE/P-WORLD等を再照合し、PB/地域先行/別型式/延期を監査。
- 欠損は表記揺れ・正式型式・メーカー・シリーズ名、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間等へ検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料横断後のみUNVERIFIED。

## 今回の主要ソース
取得日: 2026-09-14
- コナミアミューズメント公式: https://www.konami.com/amusement/psm/slot/kyoukaraoreha/00_top.html
- コナミアミューズメント企業ニュース: https://www.konami.com/amusement/corporate/ja/topics/20241004/
- G-net販売概要: https://g-net-ps.com/info/s0148/
- HAZUSE 今日から俺は!!: https://hazuse.com/machine/pachislot/4S0633/
- 遊技日本/P-WORLD: https://news.p-world.co.jp/articles/28421/nippon
- 必勝本 設定変更時の挙動: https://hisshobon.com/machineinfo/84569/
- 必勝本 狙いドコロ&ヤメ時: https://hisshobon.com/machineinfo/84566/
- 必勝本 ボーナス解説: https://hisshobon.com/machineinfo/84587/
- なな徹 朝一/設定変更: https://nana-press.com/kaiseki/machine/810/24302/
- なな徹 狙い目: https://nana-press.com/kaiseki/machine/810/24300/
- 一撃 天井/朝一: https://1geki.jp/slot/l_kyoukaraoreha/3/
- 一撃 ベース: https://1geki.jp/slot/l_kyoukaraoreha/4/
- ちょんぼりすた: https://chonborista.com/slot/konami-slot/217284/
- パチセブン: https://pachiseven.jp/machines/7003/cutout/2
- 必勝本 L 真・一騎当千: https://hisshobon.com/machineinfo/84872/
- HAZUSE L 真・一騎当千: https://hazuse.com/machine/pachislot/SX0086/
