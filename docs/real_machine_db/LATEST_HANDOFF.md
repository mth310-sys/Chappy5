# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **715**
- latestMachineAdded: **スカイガールズ～よろしく！ゼロ～**（TAKASAGO）
- latestRecord: `docs/real_machine_db/machines/2013-02-18_sky-girls-yoroshiku-zero.md`
- chronologicalFrontier: **2013-02-18**
- frontierLatestExactDateMachine: **スカイガールズ～よろしく！ゼロ～**
- schema: **resetBehavior v0.7**
- status: **OPEN_2013-02-18_GROUP__NEXT_METAL_SLUG_3**

## 今回の同期

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前最新レコード `2013-02-04_mega-millionaire-venus-version.md` を確認。
- `INDEX.md` は19件地点の旧集約状態。README規定どおり、より新しい `LATEST_HANDOFF.md` と実レコードを直近進捗の正本として優先。
- 開始時main正本は recordCount **714** / chronologicalFrontier **2013-02-04** / 02-04群CLOSED。
- 会話上の711件地点よりmainが先行し、らんま1/2・魁!!男塾・メガミリオネア ヴィーナスヴァージョンまで既登録だったため重複追加しなかった。
- 2013-02-05～02-17境界を再監査。K-Navi 2013年2月全国一斉導入カレンダーでは02-04の次の具体日付きパチスロが02-18で、途中の具体日付きパチスロはなし。別検索でも本線へ割り込む具体日付き未登録5号機を今回確認できなかった。
- repo検索で未登録を確認後、**715件目: スカイガールズ～よろしく！ゼロ～（TAKASAGO）** を追加。

## 今回追加 — スカイガールズ～よろしく！ゼロ～

### 性能コア

- releaseDate: **2013-02-18**。K-Navi全国一斉導入開始日とHAZUSE導入開始日が一致。コナミアミューズメント公式アーカイブは2013年2月稼働開始。
- 型式名: **スカイガールズFU** / 検定番号 **2S1107**。
- systemType: **5号機 / A+ART / ボーナス+ゲーム数上乗せ・セットストック・継続抽選ART**。
- 機械割: **96.8 / 97.5 / 99.4 / 104.1 / 107.0 / 118.7%**。
- ART初当たり: **1/538.3 / 1/488.0 / 1/509.1 / 1/389.2 / 1/414.1 / 1/297.1**。
- BIG合算: **1/394.8 / 1/383.3 / 1/368.2 / 1/378.8 / 1/368.2 / 1/327.7**。
- REG: **1/840.2 / 1/675.6 / 1/728.2 / 1/580.0 / 1/606.8 / 1/512.0**。
- 50枚ベース: **約31G**。
- ART「ソニックダイブゾーン」: **1セット30G+α / 純増約+1.5枚/G**。
- SKY BIG / BIG: **210枚**、REG: **最大56枚**。
- 通常天井: **ボーナス間1500G**。恩恵は次回ボーナスまでのV-1モード（無限ART）+ SONICモード + LOCKストック。

### resetBehavior v0.7

- 設定変更時: **天井Gリセット / モード再抽選 / 規定Gリセット / RT状態は設定変更後状態へ**。
- 液晶ステージ: 横須賀・追浜ステージ中は引継ぎ、それ以外はリセット。
- 電源OFF→ONのみ: 必勝本が **「全て引き継ぐ」** と直接記載。天井G・モード・規定G・RT状態等を保持。
- 据え置き: 電源OFF→ON契約に基づき内部値を引継ぎ。
- 設定変更後の規定ゲーム数ART直撃公開値: **23G 2.5% / 93G 10.0% / 193G 7.5% / 振り分けなし80.0%**。193G以内合計 **20.0%**。
- 設定変更後も1500Gボーナス間天井自体は新規カウントで有効。専用短縮天井ではなく、別系統の早い規定G ART抽選として保存。
- 変更判別: 設定変更時は次回BIGの告知タイプカーソルが「音羽BIG」に戻り、設定変更なしでは前日の最後のBIG選択カーソルを保持するという資料あり。前日選択状況を把握できる場合に変更/据え置きを推測可能。
- 設定変更時の低確A/B・高確A/B・超高確の個別振り分け、通常内部モード具体振り分け、ガックン固有挙動は資料系統を変えて再探索後も **UNVERIFIED_AFTER_RESEARCH**。
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN**。

### CONFLICT / 品質注記

- 設定変更後193G規定ゲーム数振り分けは、必勝本・CrankySevenが **7.5%** で一致。HAZUSE本文は **75.0%** 表示だが、同表の23G 2.5% + 93G 10% + なし80%と合計すると167.5%になるため成立しない。主値7.5%を採用し、HAZUSE表示を `CONFLICT_APPARENT_TRANSCRIPTION_OR_DISPLAY_ERROR` としてレコードに保持。
- 2015年「スカイガールズ～ゼロ、ふたたび～」、2020年「スカイガールズ～ゼロノツバサ～」のリセット天井・有利区間仕様は初代へ転記していない。

## 2013-02-18同日群監査

K-Navi 2013年2月新台カレンダーの全国一斉導入開始日ベースで、2013-02-18パチスロは以下3機種:

1. スカイガールズ～よろしく！ゼロ～（TAKASAGO） — **715件目 / 今回登録**。
2. メタルスラッグ3（SNKプレイモア） — **次回処理**。
3. ヴァン・ヘルシング ハンティングラッシュ（藤商事） — **その次**。

- 02-18群は **OPEN**。
- K-Navi上の次の具体日境界は **2013-02-25**（パチスロ「EVANGELION」、ハイサイ蝶特急2）。02-18群を閉じてから進む。

## 次回再開地点

1. **recordCount 715 / chronologicalFrontier 2013-02-18 / 02-18群OPEN** から開始。
2. **2013-02-18「メタルスラッグ3」（SNKプレイモア）** を性能コア+resetBehavior v0.7で収集。repo重複を最新mainで再確認してから追加。
3. 続いて同日群 **「ヴァン・ヘルシング ハンティングラッシュ」（藤商事）**。
4. 02-18群残存監査後にCLOSEDとし、02-19～02-24境界監査 → 02-25群へ進む。
5. 欠損は表記揺れ・型式名・メーカー・シリーズ名と「設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間」を組み替え、公式・業界・当時解析・古いDB・アーカイブ・回顧資料を横断後のみUNVERIFIED。競合は平均せずCONFLICT。

## 遡及resetBehavior QA 進捗

- 本線と別のQA再開地点: `docs/real_machine_db/machines/2007-01_karate-baka-ichidai.md`。
- 新規本線を止めず、QAリレーで継続。

## 主要出典 — 取得日 2026-09-06

### スカイガールズ～よろしく！ゼロ～
- コナミアミューズメント公式: `https://www.konami.com/amusement/psm/archive/ps/2013/skygirls/index.html`
- K-Navi: `https://p-kn.com/slot/1783/`
- K-Navi 2013年2月カレンダー: `https://p-kn.com/calendar/201302/`
- HAZUSE: `https://hazuse.com/machine/pachislot/2S1107/`
- HAZUSE ART/規定G: `https://hazuse.com/machine/pachislot/2S1107/genre/209/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6963`
- パチ＆スロ必勝本 天井&設定変更: `https://p.hisshobon.jp/machine/2150/1/38561`
- パチ＆スロ必勝本 規定ゲーム数振り分け: `https://p.hisshobon.jp/machine/2150/1/38600`
- CrankySeven: `https://crankyseven.com/skygirls-pc.htm`
- pacnk: `https://pacnk.com/slot/2013/skygirls/top.php`
- パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/takasago_slot/05/l.php`
- 天井ハイエナ生活: `https://macerate.seesaa.net/article/344017004.html`
