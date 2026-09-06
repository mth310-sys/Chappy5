# 実機DB 最新リレー引継ぎ

更新日: 2026-09-07

## 現在地点

- recordCount: **844**
- latestRecordAdded: **スロット バットマン**（エレコ）— 2014-09-22
- latestRecord: `docs/real_machine_db/machines/2014-09-22_slot-batman.md`
- chronologicalFrontier: **2014-09-22**
- frontierLatestMachine: **スロット バットマン**
- schema: **resetBehavior v0.7**
- status: **2014-09-22_GROUP_CLOSED / 2014-09-23_TO_2014-09-28_CLOSED_FOR_CURRENT_RESEARCH**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`、`docs/real_machine_db/INDEX.md`、`docs/real_machine_db/LATEST_HANDOFF.md`、843件目 `2014-09-22_sasami-san-ganbaranai-slot.md` を再読。
- INDEXは19件表記の旧集約状態のため、README規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 作業開始時の正本は **843件 / 2014-09-22 / 09-22_GROUP_OPEN**。
- handoff指定の未登録候補 **スロット バットマン** をNo.844として登録。
- machine record commit: `d39beb1f875fc61ad9b7a66ca1a5fb9102916920`。

## 今回追加 — スロット バットマン

### identity / 性能コア

- canonical manufacturer: **エレコ**。
- hall start: **2014-09-22**（K-Navi、パチ＆スロ必勝本）。
- 型式: **SLOTバットマンBL**（東京都公安委員会検定通過状況を扱う遊技通信、実機資料）。
- 数字形式の検定番号: `UNVERIFIED_AFTER_RESEARCH`。
- type: **5号機 / ART / CZ / 擬似ボーナス**。
- 機械割: **97.6 / 99.1 / 101.3 / 106.0 / 110.8 / 115.7%**。
- ART初当たり: **1/264.0 / 254.5 / 240.8 / 213.5 / 193.9 / 168.1**。
- baseGamesPer50: **約30G/50枚**（Cranky Seven「1000円あたり約30G」）。
- ART純増: **約2.3枚/G**。
- ダークナイトラッシュ: **1セット50G+α**。
- 擬似BIG: **30G固定**。
- ART間天井: **999G**。CZ間最大天井: **600G**。
- coreStatus: **COMPLETE_CORE_WITH_SOURCE_LIMITS**。

### manufacturer CONFLICT

- ユニバーサル公式: **エレコ**。
- 東京都公安委員会検定通過状況: **SLOTバットマンBL / エレコ**。
- P-WORLD: **エレコ**。
- K-Navi: **メーシー**。
- 平均/曖昧化せず `CONFLICT_METADATA_MANUFACTURER_KNAVI_MACY_VS_OFFICIAL_ELECO` として保存。高信頼3系統が一致するエレコをcanonicalに採用。

## resetBehavior v0.7 — スロット バットマン

- 設定変更時: **天井到達までのゲーム数クリア + CZ抽選モード再抽選**。
- 設定1朝一モード:
  - 通常A **62.98%**
  - 通常B **24.41%**
  - 天国A **9.16%**
  - 天国B **3.05%**
  - 逆境A **0.31%**
  - 逆境B **0.09%**
- 天国以上合算: **設定1 約12% → 設定6 約28%**。
- モード別CZ間最大G: **通常A 600 / 通常B 300 / 天国A 89 / 天国B 39 / 逆境A 39 / 逆境B 39G**。
- 設定変更後だけの固定ART短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。CZ側は再抽選モードにより39/89/300/600Gとなるため、固定短縮と混同しない。
- 据え置き: 前日+当日CZ間600G超で変更確定扱い、宵越し600/300G付近CZ発動で据え置き濃厚とする解析から、**CZ間カウンタCARRYOVER**を支持。ART間999Gの持越しは当時実戦の観測支持に留める。
- 設定変更なし電源OFF→ON: 直接対照表を再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。据え置き観測から自動推定しない。
- CZモード以外の高確/低確等の設定変更開始状態: `UNVERIFIED_AFTER_RESEARCH`。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- 朝一恩恵: 天国/逆境選択ならCZ上限39/89G。低設定では振り分けが弱く、朝一実戦集計でも大きな狙い目ゾーンなし。
- 固定的リセット不利: **NONE_CONFIRMED_AFTER_RESEARCH**。実戦集計の「通常時より引き戻し弱め」は内部仕様の確定ペナルティと分離。
- 変更判別: 前日G数を使ったCZ間600G超/300・600G付近発動が主要材料。本機固有ガックン・初期出目・初期ステージ確定判別は `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetBehaviorQA: **COMPLETE_WITH_SOURCE_LIMITS**。

## 2014-09-22群 / 境界監査

- 09-22登録済み:
  - **ささみさん＠がんばらないすろっと**（DAXEL）No.843
  - **スロット バットマン**（エレコ）No.844
- `2014-09-22 / 9月22日 / パチスロ / 新台 / 導入 / 稼働開始 / メーカー別` を再監査し、今回この2機以外の具体日付き未登録5号機を固定できず **09-22_GROUP_CLOSED_FOR_CURRENT_RESEARCH**。
- 09-23〜09-28も日付別・新台・導入開始・稼働開始・メーカー別に再探索し、今回具体日付き未登録5号機を固定できず **CLOSED_FOR_CURRENT_RESEARCH**。

## 次の2014-09-29群 — 要監査

- **ドリームジャンボ ～幸福のチケットを君に～**（JPS）: K-Naviで **2014-09-29ホール導入開始**を確認。次回最優先の通常候補。
- **戦律のストラタス**: KONAMI公式ブログで **新潟県のみ2014-09-29より先行稼働開始**を明記。全国導入日と地域先行日を混同せず、DBのreleaseDate主値を「最初の実ホール稼働」とするか「全国導入」とするか既存レコード基準を再確認して処理する。少なくとも09-29群候補から落とさない。
- **バビロン(with桜丘ショコラ)**: 既存handoffで09-29/10-06の導入日競合が既知。到達時に公式・当時資料を再精査し、平均せずCONFLICT保持。

## 遡及 resetBehavior QA カーソル

- 次: `docs/real_machine_db/machines/2007-02_new-hanahana-30.md`（ニューハナハナ-30）。
- 新規収集を止めず、本線と並行して1件ずつ前進する。

## safeguard

- K-Naviのメーカー「メーシー」を、公式/検定公示/P-WORLDの「エレコ」より優先しない。ただし競合情報自体は消さない。
- `SLOTバットマンBL` は型式表記。数字形式の検定番号を推測生成しない。
- 据え置きCZカウンタの観測から単純電源OFF→ON契約を推定しない。
- 朝一モード表はリセット時の客行動・ホール判断に必要な範囲だけ保存し、通常時全モード移行や詳細内部抽選へ拡張しない。
- 09-29の戦律のストラタスは「新潟県先行稼働」と「全国稼働」を分離して扱う。
- P-WORLD等の最終更新日を導入日に使用しない。
- 2015-06-08到達時の **吉宗～極～（ヨシムネH2A4 / 3S1093）** 正式量産版処理注意を維持。

## 次回再開地点

1. **recordCount 844 / chronologicalFrontier 2014-09-22 / 09-22_GROUP_CLOSED / 09-23〜09-28_CLOSED** から開始。
2. 最新mainで README / mission / INDEX / LATEST_HANDOFF / 844件目を再確認。
3. **2014-09-29群を全メーカー横断監査**。
4. 通常の次候補は **JPS「ドリームジャンボ ～幸福のチケットを君に～」**。ただし同日の **戦律のストラタス新潟先行稼働**の扱いを先に時系列基準で確定し、順序漏れを防ぐ。
5. バビロン(with桜丘ショコラ)の09-29/10-06日付競合も同日群で再精査。
6. 09-29群CLOSED後、09-30以降へ時系列前進。
7. 遡及QAは **`2007-02_new-hanahana-30.md`** から再開。

## 主要出典 — 取得日 2026-09-07

### スロット バットマン
- Universal Entertainment公式: `https://www.universal-777.com/product/slot/slot_batman/`
- Universal Entertainment 2014製品一覧: `https://www.universal-777.com/product/slot/2014/`
- 遊技通信 東京都公安委員会検定通過状況: `https://www.yugitsushin.jp/news/%E6%9D%B1%E4%BA%AC%E9%83%BD%E5%85%AC%E5%AE%89%E5%A7%94%E5%93%A1%E4%BC%9A%E6%A4%9C%E5%AE%9A%E9%80%9A%E9%81%8E%E7%8A%B6%E6%B3%81%EF%BC%888%E6%9C%8811%E6%97%A5%EF%BC%89/`
- グリーンべると: `https://web-greenbelt.jp/00007109/`
- K-Navi: `https://p-kn.com/slot/2110/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/7487`
- パチ＆スロ必勝本: `https://p.hisshobon.jp/machine/list.php?c=1&d=48254&mid=2447&p=2`
- パチマガスロマガ BIG: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/95/06.php`
- Cranky Seven: `https://crankyseven.com/batman-pc.htm`
- 期待値見える化 朝一リセット: `https://slotjin.com/slot/batman-reset/`
- 肉汁スロッター回顧: `https://www.nikuziru.com/archives/956`
- 愛品館 実機資料: `https://www.aihin.co.jp/new/news-1030955/`

### 次候補 / 境界
- ドリームジャンボ K-Navi: `https://p-kn.com/slot/2112/`
- KONAMI公式 戦律のストラタス新潟先行: `https://www.konami.com/amusement/psm/portal/magihallo/blog_mh/2014/mhs_blog_140922.html`
