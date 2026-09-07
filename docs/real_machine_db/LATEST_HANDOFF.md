# 実機DB 最新リレー引継ぎ

更新日: 2026-09-07

## 現在地点

- recordCount: **890**
- latestRecordAdded: **パチスロ おとめ妖怪ざくろ**（北電子）
- latestRecordAddedPath: `docs/real_machine_db/machines/2015-06-08_otome-youkai-zakuro.md`
- chronologicalFrontier: **2015-06-08**
- frontierLatestMachine: **パチスロ おとめ妖怪ざくろ**
- frontierRecord: `docs/real_machine_db/machines/2015-06-08_otome-youkai-zakuro.md`
- schema: **resetBehavior v0.7**
- status: **2015-06-08_GROUP_OPEN**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、旧 `LATEST_HANDOFF.md`、直前No.889 `2015-06-08_devil-survivor2-saigo-no-7nichikan.md` を再読。
- INDEXは19件時点の旧集約状態のため、README規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 作業開始時の正本は **889件 / 2015-06-08 / GROUP_OPEN**。
- 旧会話上の進捗ではなく、main実体のLATEST_HANDOFFを優先して再開地点を確定した。

## No.890 — パチスロ おとめ妖怪ざくろ

- record: `docs/real_machine_db/machines/2015-06-08_otome-youkai-zakuro.md`
- manufacturer: **北電子**
- releaseDate canonical: **2015-06-08**
- modelName: **おとめ妖怪ざくろKD**
- inspectionNumber: **4S0487**
- generation: **5号機**
- systemType: **ART / ゲーム数管理 / ゲーム数短縮（ざくろシステム）**

### 性能コア

- 機械割: **97.4 / 99.1 / 100.8 / 103.0 / 105.7 / 110.5%**。
- ART初当たり: **1/239 / 240 / 228 / 220 / 210 / 192**。
- 上記はパチマガスロマガがメーカー発表値として掲載し、P-WORLDでも一致。
- 50枚ベース: **約32G/50枚**。今回確認できた比較値は単一解析系で、公式/別系統精密値は未固定。
- ART「妖々RUSH」「妖々RUSH・鬼」: **純増約2.2枚/G**。
- 初当たり妖々RUSH: **30G～300G**。
- 妖々RUSH・鬼: **1セット50G+α**。
- 通常A/B最大天井: **1280G+前兆**。
- 天国: **128G以内**。
- ざくろモード: **396G、次回天国濃厚**。

### resetBehavior v0.7

- 設定変更時は **天井ゲーム数RESET**、内部モード再抽選。
- 公開朝一数値として **設定変更後25%で天国モード移行**を複数当時解析で確認。天国なら128G以内にART当選。
- 据え置きは **天井G・内部モード引継ぎ**とする当時解析が複数。通常運用では液晶ART回数/遊技G数も引継ぐ実戦記録あり。
- ただし **据え置きのまま液晶遊技履歴を消せる**との当時追記があるため、液晶0Gだけで設定変更確定とは扱わない。
- 純粋な **電源OFF→ONのみ**について、内部天井G・モード・液晶表示を設定変更/据え置きから独立して固定する本機固有高信頼資料は、検索語・資料系統を変えた再探索後も **`UNVERIFIED_AFTER_RESEARCH`**。
- 設定変更時の天国25%以外の完全モード振り分け、通常内部状態振り分けも **`UNVERIFIED_AFTER_RESEARCH`**。
- リセット専用固定短縮天井は **`NONE_CONFIRMED_AFTER_RESEARCH`**。25%天国選択による128G天井はモード再抽選恩恵であり「リセット固定128G天井」とはしない。
- ガックン等の本機固有確定判別は **`NONE_CONFIRMED_AFTER_RESEARCH`**。
- 有利区間は **`NOT_APPLICABLE_5TH_GEN_PRE_5_9`**。

### definition control

- グリーンべるとの2015-06-07は **納品開始予定**、K-Navi等の2015-06-08は **ホール導入開始**として分離し、canonicalは06-08。
- ざくろシステムでゲーム数短縮が発生するため、データカウンター上の実消化Gと液晶/内部管理Gを混同しない。
- 「設定変更後25%で天国」と「設定変更後128G以内の実戦当選率」は別定義。通常モード側の128G内振り分け等を含み得るため混ぜない。
- 液晶履歴は有力な朝一判別材料だが、据え置きでも履歴消去可能との資料があるため確定判別ではない。

## 2015-06-08群監査 — OPEN

処理済み:
1. **吉宗～極～** — 大都技研 — No.888。
2. **デビルサバイバー2 最後の7日間** — オリンピア — No.889。
3. **パチスロ おとめ妖怪ざくろ** — 北電子 — No.890。

同日未処理の強い候補:
1. **大工の源さん桜満開！源DREAM Ver.** — 三洋。
2. **パチスロガンソード** — KPE高砂。

- 複数機が残るため **`2015-06-08_GROUP_OPEN`** を維持。

## 次回再開地点

1. **recordCount 890 / chronologicalFrontier 2015-06-08 / GROUP_OPEN** から開始。
2. 最新mainの README / mission / INDEX / LATEST_HANDOFF / No.890を再確認。
3. 次の未処理機種 **「大工の源さん桜満開！源DREAM Ver.」（三洋）** から性能コア + resetBehavior v0.7を収集する。
4. 続いて **「パチスロガンソード」（KPE高砂）** を確認し、06/08群の全メーカー再監査後にのみCLOSED判定する。
5. exact release dateでは検定告示 / 発表 / 納品予定 / テスト導入 / 全国実ホール導入を分離する。
6. `UNVERIFIED_AFTER_RESEARCH` は表記揺れ・正式型式名・メーカー・シリーズ名と reset関連検索語を変え、公式・業界記事・当時解析・古いDB・アーカイブ/回顧資料を横断した後だけ使用。
7. 遡及resetBehavior QAカーソルは `docs/real_machine_db/machines/2007-03-19_kakumei-senshi-choshu-riki.md` を維持。新規本線を止めない。

## safeguard

- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- 据え置きと純電断を自動で同義扱いしない。本機の純電断は今回UNVERIFIEDのまま保持。
- 同名/近似名・続編機のresetBehaviorを流用しない。
- ゲーム数短縮後の液晶管理Gとデータカウンター上の実消化Gを混同しない。
- 液晶0Gを設定変更確定としない。履歴消去対策情報を保持する。
- 競合資料は平均・恣意的統合せずCONFLICT/制約として保持。

## 主要出典 — 取得日 2026-09-07

### パチスロ おとめ妖怪ざくろ
- 北電子公式: https://www.kitadenshi.co.jp/slot/otomeyoukaizakuro/
- 北電子公式ニュース: https://www.kitadenshi.co.jp/funnews/slot/page/8/
- グリーンべると: https://web-greenbelt.jp/00007701/
- 娯楽産業: https://www.goraku-sangyo.com/%E5%8C%97%E9%9B%BB%E5%AD%90%E3%80%80%E6%96%B0%E6%A9%9F%E7%A8%AE%E3%80%8C%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD-%E3%81%8A%E3%81%A8%E3%82%81%E5%A6%96%E6%80%AA%E3%81%96%E3%81%8F%E3%82%8D%E3%80%8D%E7%99%BA/
- K-Navi: https://p-kn.com/slot/2250/
- P-WORLD: https://www.p-world.co.jp/machine/database/7692
- パチマガスロマガ確率/PAYOUT: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kitac_slot/95/h.php
- パチマガスロマガ ざくろシステム: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kitac_slot/95/art01.php
- 期待値見える化: https://slotjin.com/zone/zakuro/
- スロット期待値クエスト: https://www.slopachi-quest.com/article/%E3%81%96%E3%81%8F%E3%82%8D-%E3%83%AA%E3%82%BB%E3%83%83%E3%83%88/
- 真パチスロ備忘録: https://sin-surobi.com/otomeyoukaizakuro/9910/
