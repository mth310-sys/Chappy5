# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **718**
- latestMachineAdded: **パチスロ「EVANGELION」 / EVANGELION ART**（ビスティ）
- latestRecord: `docs/real_machine_db/machines/2013-02-25_evangelion-art.md`
- chronologicalFrontier: **2013-02-25**
- frontierLatestExactDateMachine: **パチスロ「EVANGELION」**
- schema: **resetBehavior v0.7**
- status: **OPEN_2013-02-25_GROUP__EVANGELION_DONE__NEXT_HAISAI_CHO_TOKKYU_2**

## 今回の同期

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前最新レコード `2013-02-18_van-helsing-hunting-rush.md` を確認。
- `INDEX.md` は19件地点の旧集約状態のため、README規定どおり最新 `LATEST_HANDOFF.md` と実レコードを直近進捗の正本として優先。
- 開始時main正本は recordCount **717** / chronologicalFrontier **2013-02-18** / 02-18群CLOSED / 02-19～02-24監査済み / 次候補パチスロ「EVANGELION」。
- repoコード検索で「EVANGELION ART」既存レコードなしを確認後、**718件目: パチスロ「EVANGELION」 / EVANGELION ART（ビスティ）** を追加。

## 今回追加 — パチスロ「EVANGELION」 / EVANGELION ART

### 性能コア

- releaseDate: **2013-02-25**。K-Navi、パチビー、DMMぱちタウン一致。フューチャースコープの2013-02-04リリースも2013年2月下旬全国導入予定として整合。
- 型式名: **EVANGELION・A** / 検定番号 **2S1267**（後年解析DB照合）。
- systemType: **5号機 / A+ART / リアルボーナス+ゲーム数上乗せ+セットストック / 128G周期MAP管理**。
- 機械割主系列: **97.4 / 98.4 / 100.9 / 104.1 / 107.8 / 114.8%**。
- ART初当たり: **1/438.9 / 410.7 / 397.1 / 338.2 / 305.3 / 257.0**。
- BIG合成: **1/431.2 / 431.2 / 431.2 / 431.2 / 414.8 / 414.8**。
- REG合成: **1/753.3 / 753.3 / 753.3 / 720.2 / 720.2 / 720.2**。
- ボーナス合成: **1/274.2 / 274.2 / 274.2 / 269.7 / 263.2 / 263.2**。
- 50枚ベース: **約32G/1000円（50枚相当）**。
- ART「EVA RUSH Ver.1.0」: **1セット30G+α / 純増約+1.6枚/G**。
- BIG/覚醒BIG: **約203枚**、REG: **56枚**。
- CZ「インダクションモード」: **ART期待度約25%**。
- 周期天井: **1周期128G+α**。3周期目終了後は一部でART、7周期目終了後は50%でART、**11周期目終了後は覚醒ART Ver.2.0**。連続演出/CZ等で周期カウント停止があるため実ゲーム数は伸びる。

### resetBehavior v0.7 — 本機の重要点

- **設定変更時、天井へ向けた消化済み周期数はCLEAR**。
- しかし、**現在の滞在MAP番号とMAP内消化ゲーム数は引継ぎ**。
- つまり本機は「リセットで現在周期も0Gから」という単純仕様ではない。前日MAP内の残りGを消化して周期境界へ到達した後、設定変更でクリアされた周期回数が効く。
- DMMぱちタウンの直接表記 `天井までの消化周期数クリア / 滞在MAP番号引継ぎ / MAP内消化G引継ぎ` と、旧解析整理の `前日の残り周期G消化＋高確率ステージ消化後に周期回数がクリア` は整合。
- 設定変更時液晶: **シンジステージ**。
- **電源OFF→ONのみ**では、消化周期数・MAP番号・MAP内消化Gをすべて引継ぐ。通常ステージ中の液晶はシンジ、チャンスステージ中ならチャンスステージを引継ぐ。
- 据え置き+通常電断は上記電源OFF→ON仕様から、周期天井進捗・MAP進捗を保持する契約として保存。
- 設定変更専用の固定短縮天井: **NONE_CONFIRMED**。
- MAP以外の高確/低確等の設定変更時状態振り分け、リールガックンは検索語・資料系統変更後も **UNVERIFIED_AFTER_RESEARCH**。
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN**。

### 朝一/変更判別

- 朝一シンジステージは**設定変更時にも、電源OFF→ONのみで通常ステージだった場合にも発生**するため、シンジ単独では変更判別不可。
- 前日チャンスステージ→朝一同チャンスステージ保持なら据え置き/電断のみの材料になり得る。一方、設定変更時はシンジへ移る。
- 設定変更でもMAP番号・MAP内Gを引き継ぐため、周期境界到達タイミングだけで変更確定とはしない。

### CONFLICT / 品質注記

- 機械割はDMMぱちタウン・5号機クロニクル等の主系列 **97.4～114.8%** が一致。
- 後年の低品質回顧系に **96.9～114.2%** 表記があるため、`CONFLICT_LOW_QUALITY_RETROSPECTIVE_PAYOUT` として隔離し主値へ平均しない。
- resetBehaviorのDMM表と旧解析表は表現差はあるが同一挙動を説明しておりCONFLICTではない。

## 2013-02-25同日群監査

K-Navi 2013年2月新台導入カレンダーの全国一斉導入開始日ベースで2013-02-25パチスロは以下2機種:

1. **パチスロ「EVANGELION」（ビスティ） — 718件目 / 今回登録**。
2. **ハイサイ蝶特急2（タイヨー） — 未処理 / 次回**。

- 02-25群は **OPEN**。
- ハイサイ蝶特急2はK-Naviで2013-02-25導入を確認。グリーンべると2013-01-17業界記事は2月24日納品開始予定としており整合。
- 同機の既知重要値: ART純増約2.96～3.0枚/G、最大天井128G、天井到達時「超確変」、ハイサイチャンス/蝶特急モード設定別確率が業界記事に存在。K-Naviには「設定変更後の挙動」専用項目もあるため、次回はresetBehaviorを優先して当時資料まで掘る。

## 次回再開地点

1. **recordCount 718 / chronologicalFrontier 2013-02-25 / 02-25群OPEN** から開始。
2. **2013-02-25「ハイサイ蝶特急2」（タイヨー）** を性能コア+resetBehavior v0.7で収集。最新mainで重複再確認してから追加。
3. 02-25群残存をK-Naviカレンダー以外の導入一覧/メーカー系統でも監査し、漏れがなければCLOSED。
4. その後2013-02-26以降の次の具体導入日群へ前進。
5. 欠損は表記揺れ・型式名・メーカー・シリーズ名と「設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間」を組み替え、公式・業界・当時解析・古いDB・アーカイブ・回顧資料を横断後のみUNVERIFIED。競合は平均せずCONFLICT。

## 遡及resetBehavior QA 進捗

- 本線と別のQA再開地点: `docs/real_machine_db/machines/2007-01_karate-baka-ichidai.md`。
- 新規本線を止めず、QAリレーで継続。

## 主要出典 — 取得日 2026-09-06

### パチスロ「EVANGELION」 / EVANGELION ART
- SANKYOオンライン博物館: `https://www.sankyo-fever.jp/collection/879/`
- フューチャースコープ導入記念リリース: `https://prtimes.jp/main/html/rd/p/000000161.000001932.html`
- フューチャースコープ Android実機アプリ: `https://www.atpress.ne.jp/news/43702`
- K-Navi: `https://p-kn.com/slot/1798/`
- K-Navi 2013年2月新台カレンダー: `https://p-kn.com/calendar/201302/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6993`
- パチビー: `https://www.pachibee.jp/machines/index/213020002`
- DMMぱちタウン（リセット仕様含む）: `https://p-town.dmm.com/machines/230`
- パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/bisty_slot/23/bisty_slot_23.php`
- 旧解析整理 crankyseven: `https://crankyseven.com/evangelionart-pc.htm`
- 5号機クロニクル: `https://5goki.com/bisty`
- 後年型式照合DB: `https://pachinavi.net/machines/eva-art/`

### 次候補 ハイサイ蝶特急2
- K-Navi: `https://p-kn.com/slot/1795/`
- グリーンべると 2013-01-17: `https://web-greenbelt.jp/00000729/`
- パチ＆スロ必勝本: `https://p.hisshobon.jp/machine/2157`
