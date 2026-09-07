# 実機DB 最新リレー引継ぎ

更新日: 2026-09-07

## 現在地点

- recordCount: **884**
- latestRecordAdded: **パチスロ ゴッドイーター**（山佐）
- latestRecordAddedPath: `docs/real_machine_db/machines/2015-05-11_pachislot-god-eater.md`
- chronologicalFrontier: **2015-05-11**
- frontierLatestMachine: **パチスロ ゴッドイーター**
- frontierRecord: `docs/real_machine_db/machines/2015-05-11_pachislot-god-eater.md`
- schema: **resetBehavior v0.7**
- status: **2015-05-11_GROUP_OPEN**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、本 `LATEST_HANDOFF.md`、直近No.883 `2015-04-13_silent-mobius.md`、frontier `2015-04-20_shura-no-toki.md` を再読。
- INDEXは19件時点の旧集約状態のためREADME規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 作業開始時の最新正本は **883件 / chronologicalFrontier 2015-04-20 / 04-20_GROUP_CLOSED_FOR_CURRENT_RESEARCH**。過去チャットの880件地点には戻らず最新mainから継続した。
- GitHubコード検索で「パチスロ ゴッドイーター」の既存レコードがないことを確認してから追加。

## 境界監査 — 2015-04-21〜05-10

- 「2015年4月21日〜5月10日」の具体日を、`パチスロ / スロット / 新台 / 導入 / 稼働開始` と組み合わせ、導入カレンダー・当時記事・旧DBを横断。
- 2015-04-27検索では旧機種「パチスロうる星やつら2」のAndroid版777TOWN配信が強くヒットするが、実機新台ではないため除外。
- 同期間に実ホール導入日を強く固定できる未登録5号機を今回確認できなかったため **`2015-04-21_TO_2015-05-10_CLOSED_FOR_CURRENT_RESEARCH`**。
- 次の強い実ホール導入アンカーは **2015-05-11**。

## No.884 — パチスロ ゴッドイーター

- record: `docs/real_machine_db/machines/2015-05-11_pachislot-god-eater.md`
- manufacturer: **山佐**
- releaseDate canonical: **2015-05-11**
- modelName: **パチスロゴッドイーターCC**
- inspectionNumber: **4S0713**
- systemType: **5号機 AT / ゲーム数管理+CZ**

### 導入日 / identity

- 山佐公式は5号機AT・2015年5月稼働。
- メーカー発表文転載の4Gamer/娯楽産業は **2015-05-11「本日より稼働開始」**。
- K-Navi・HAZUSEも2015-05-11で一致。
- 事前資料の **2015-05-10納品予定**はhall-startとは定義分離。

### 性能コア

- 機械割: **96.9 / 98.8 / 101.5 / 104.7 / 109.1 / 116.0%**。
- AT初当たり canonical: **1/282.5 / 264.8 / 245.0 / 219.1 / 206.9 / 172.7**。
- 設定2のみpacnk **1/264.5**との微差あり。平均せず `CONFLICT_SETTING2_AT_INITIAL_HIT` として保持。
- CZ「殲滅モード」初当たり: **1/364.1 / 304.9 / 369.6 / 272.9 / 379.9 / 247.3**。
- 50枚ベース: **約31G/50枚**。
- AT「アラガミバースト」: **純増約2.4枚/G**、初当たり **40G or 100G + ストーリー12G**。
- CZ「殲滅モード」: **10G+α / AT期待度約50%**。
- 通常モード: 通常A / 通常B / 通常C（天国準備） / 天国 / 超天国。
- モード別最大天井: **777 / 777 / 384 / 96 / 32G**。

### resetBehavior v0.7

- 設定変更:
  - 天井ゲーム数 **RESET**。
  - モード **再抽選**。
  - 内部状態 **再抽選**。
  - 液晶 **エントランス**開始。
- 据え置き（通常の日次運用=設定変更なし+電断）:
  - 天井G **CARRYOVER**。
  - モード **CARRYOVER**。
  - 内部状態 **CARRYOVER**。
- 純電源OFF→ON:
  - 天井G / モード / 内部状態 **すべて引継ぎ**。
  - 液晶はエントランス。
- リセット専用の固定短縮天井は **NONE_CONFIRMED**。ただしモード再抽選で384/96/32G天井が選ばれるため `MODE_DEPENDENT_EARLY_CEILING_EXISTS`。
- 有利区間: `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### 公開朝一数値

設定変更時モード:

| 設定 | 通常A | 通常B | 通常C（天国準備） | 天国 | 超天国 |
|---:|---:|---:|---:|---:|---:|
| 1 | 35.0% | 30.0% | 15.0% | 19.9% | 0.1% |
| 2 | 35.0% | 30.0% | 15.0% | 19.5% | 0.5% |
| 3 | 30.0% | 30.0% | 17.5% | 22.4% | 0.1% |
| 4 | 30.0% | 30.0% | 17.5% | 22.0% | 0.5% |
| 5 | 25.0% | 30.0% | 20.0% | 24.9% | 0.1% |
| 6 | 24.5% | 30.0% | 20.0% | 25.0% | 0.5% |

設定変更時内部状態（通常 / 高確）:

- 設定1: **80 / 20%**
- 設定2: **70 / 30%**
- 設定3: **80 / 20%**
- 設定4: **60 / 40%**
- 設定5: **80 / 20%**
- 設定6: **50 / 50%**

### 朝一恩恵 / 不利 / 判別

- 天国以上合成は設定1・2 **20.0%**、3・4 **22.5%**、5 **25.0%**、6 **25.5%**。一律短縮天井ではなくモード依存の早当たり要素。
- 高確スタート率は20〜50%で設定差あり。高確はCZ抽選を優遇。
- 不利: 設定変更で前日の天井G・モード・状態を消すため宵越し狙いには不利。
- 当時実機検証で **朝一ガックンあり=設定変更濃厚 / なし=据え置き濃厚**。ただし店側1G回し等で対策可能なため確定扱いしない。
- レア役なしで朝一カフェステージ移行も設定変更推測材料。
- 初期液晶は設定変更/純電断ともエントランスのため単独判別不可。

## source / definition control

- 2024年スマスロ「ゴッドイーター リザレクション」の600Gリセット天井、有利区間、偏食因子等は一切流用していない。
- 通常C=天国準備は、通常C最大384G・天国準備モードと明記する当時系資料で表記対応を確認。
- AT初当たり設定2 **1/264.8 vs 1/264.5**は平均せずCONFLICT。
- ガックンは当時実機観測として保持し、100%確定契約へ格上げしない。

## 2015-05-11群

- **パチスロ ゴッドイーター** — 山佐 — No.884 — 登録済み。
- 同日候補として **エマ「めんそーれ2-30」**（資料によって「めんそ〜れ2」「めんそーれ2」表記）を確認。
- したがって **`2015-05-11_GROUP_OPEN`**。同日群はまだ閉じない。

## 次回再開地点

1. **recordCount 884 / chronologicalFrontier 2015-05-11 / 05-11_GROUP_OPEN** から開始。
2. 最新mainの README / mission / INDEX / LATEST_HANDOFF / `2015-05-11_pachislot-god-eater.md` を再確認。
3. 次の未処理候補 **エマ「めんそーれ2-30」**を、正式表記・型式・5号機としての独立性・実ホール導入日を複数系統で固定して処理する。
4. 同機追加後、**2015-05-11同日群を全メーカー横断**して追加未登録機がないか監査。なければGROUP_CLOSEDとして05-12以降へ進む。
5. 2015年5月の既知候補としてネット「最胸伝奇 パイ遊記」、SNKプレイモア「ドラゴンギャル～双龍の闘い～」が存在するため、具体導入日を固定して時系列順を崩さない。
6. exact release dateでは検定告示 / 発表 / 納品予定 / 地域先行 / 全国稼働 / 実ホール導入 / アプリ配信を分離する。
7. 欠損は表記揺れ・型式・メーカー名・設定変更/据え置き/電源OFF ON/天井/モード/状態/ガックン等へ検索語と資料系統を変えた十分な再探索後だけ `UNVERIFIED_AFTER_RESEARCH`。
8. 遡及resetBehavior QAカーソルは `docs/real_machine_db/machines/2007-03-19_kakumei-senshi-choshu-riki.md` を維持。新規本線を止めない。

## safeguard

- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- 据え置き・純電断は本機固有資料なしに一般的5号機慣例から推定しない。
- `UNVERIFIED_AFTER_RESEARCH` は検索語・資料系統を変えた再探索後だけ使用。
- 同名シリーズ・荒神Ver.・2021年ジ・アニメーション・2024年スマスロ版を混同しない。
- 2015-06-08到達時の **吉宗～極～（ヨシムネH2A4 / 3S1093）** 正式量産版処理注意を維持。

## 主要出典 — 取得日 2026-09-07

### パチスロ ゴッドイーター
- 山佐公式: https://yamasa-next.co.jp/model_gde/
- 4Gamer（メーカー発表文転載）: https://www.4gamer.net/games/301/G030129/20150511064/
- 娯楽産業: https://www.goraku-sangyo.com/%E5%B1%B1%E4%BD%90%E3%80%80ios%EF%BC%86android%E3%80%8C%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD-%E3%82%B4%E3%83%83%E3%83%89%E3%82%A4%E3%83%BC%E3%82%BF%E3%83%BC%E3%80%8D%E3%82%B7%E3%83%9F%E3%83%A5%E3%83%AC/
- K-Navi: https://p-kn.com/slot/2240/
- HAZUSE: https://hazuse.com/machine/pachislot/4S0713/
- P-WORLD: https://www.p-world.co.jp/machine/database/7641
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/202/a.php
- パチスロ収支アップ: https://smaslo.man-soft.com/slot-kaiseki/godeater.html
- すろぱちくえすと: https://www.slopachi-quest.com/article/god-eater-reset/
- 2-9伝説まとめ: https://29den.com/godeater/
- 2-9伝説通常C解説: https://2-9densetsu.com/godeater-serif/
- パチナビ: https://pachinavi.net/machines/god-eater/settei/
- pacnk: https://pacnk.com/slot/tools/sh_godeater.html
- ちょんぼりすた: https://chonborista.com/slot/yamasa-slot/6854/comment-page-18/
- 真パチスロ備忘録（ガックン）: https://sin-surobi.com/godeater/11805/
- スロスター（納品予定/ベース）: https://ameblo.jp/slostar/entry-11996356367.html

### 境界 / 次候補
- 2015年導入スロット新台情報まとめ: https://slotnews777.blog.fc2.com/blog-entry-2348.html
- サミーネットワークス（2015-04-27うる星やつら2 Androidアプリ配信）: https://www.sammy-net.jp/news/2015/04/2777town-for-android.html
