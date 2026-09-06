# 実機DB 最新リレー引継ぎ

更新日: 2026-09-07

## 現在地点

- recordCount: **837**
- latestRecordAdded: **パチスロ ヘルシング**（北電子）— 2014-08-04
- latestRecord: `docs/real_machine_db/machines/2014-08-04_pachislot-hellsing.md`
- chronologicalFrontier: **2014-08-04**
- frontierLatestMachine: **パチスロ ヘルシング**
- schema: **resetBehavior v0.7**
- status: **2014-08-04_GROUP_CLOSED_FOR_CURRENT_RESEARCH**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`docs/real_machine_db/LATEST_HANDOFF.md`、836件目 `2014-08-04_yajikita-dochuki-otsu.md` を再読。
- INDEXは19件表記の旧集約状態のため、README規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 作業開始時の正本は **836件 / 2014-08-04 / 08-04_GROUP_OPEN**。
- 前回handoff指定どおり、同日群の次の未処理「パチスロ ヘルシング」をNo.837として処理した。

## 今回追加 — パチスロ ヘルシング

### identity / 性能コア

- manufacturer: **北電子**。
- hall start: **2014-08-04**（K-Navi / パチビー / パチトラ / HAZUSE）。
- type: **5号機 / ボーナス+ART**。
- 型式名: **ヘルシングTH**（北電子公式検定情報）。
- 検定番号: **3S1259**（HAZUSE）。
- 機械割: **97.6 / 98.6 / 101.1 / 103.6 / 105.7 / 110.1%**。
- BIG: **1/394.8 / 385.5 / 394.8 / 381.0 / 390.1 / 360.1**。
- REG: **1/728.2 / 682.7 / 712.3 / 668.7 / 697.2 / 630.2**。
- ボーナス合成: **1/256.0 / 246.4 / 254.0 / 242.7 / 250.1 / 229.1**。
- ボーナス+ART合算: **1/169.8 / 156.3 / 160.6 / 143.1 / 144.8 / 123.2**。
- ART「ミディアンゾーン」: **30G+α / 純増約1.4枚/G / 継続率約33〜90%**。
- BIG平均約**204枚**、REG平均約**48枚**。
- 通常天井: **ボーナス間1400G + 最大36G前兆 → 継続率90% ART**。通常運用中はART当選で天井Gはリセットされない。
- 50枚ベースは資料系統・検索語を変えて再探索後も `UNVERIFIED_AFTER_RESEARCH`。
- ART単独初当たり設定別一覧は未固定。メーカー発表のボーナス+ART合算を比較値として保持し、逆算値は作らない。
- coreStatus: **COMPLETE_CORE**（baseGamesPer50のみUNVERIFIEDだが主要スペックは高信頼複数照合）。

## resetBehavior v0.7 — パチスロ ヘルシング

- settingChangeBehavior: HAZUSE当時解析で **設定変更時に低確/通常/高確の内部状態移行抽選**を直接確認。
- stateAfterReset:
  - 設定1: 低確75.0% / 通常5.0% / 高確20.0%
  - 設定2: 70.0% / 6.5% / 23.5%
  - 設定3: 65.0% / 8.0% / 27.0%
  - 設定4: 60.0% / 10.0% / 30.0%
  - 設定5: 55.0% / 12.5% / 32.5%
  - 設定6: 50.0% / 15.0% / 35.0%
- gameCounterReset: 設定変更 / 据え置き / 純電断のボーナス間1400G天井カウンタ処理は、本機固有の直接比較本文を十分な再探索後も固定できず **UNVERIFIED_AFTER_RESEARCH**。一般的5号機仕様から補完しない。
- carryOverBehavior: 据え置き時の天井G・内部状態直接契約は `UNVERIFIED_AFTER_RESEARCH`。
- powerCycleBehavior: 設定変更なし電源OFF→ON時の天井G・状態・前兆契約は `UNVERIFIED_AFTER_RESEARCH`。
- ceilingAfterReset: 設定変更専用の短縮天井は `NONE_CONFIRMED_AFTER_RESEARCH`。
- modeAfterReset: 規定Gモード型ではない。朝一専用モードは `NONE_CONFIRMED_AFTER_RESEARCH`。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- resetBenefits: 設定変更時の高確スタート率 **20.0〜35.0%**が公開朝一関連数値。天井短縮/朝一ART確定はなし。
- resetPenalties: `NONE_CONFIRMED_AFTER_RESEARCH`。天井Gリセットを直接確認できていないため宵越し進捗消去も断定しない。
- resetDetection: ガックン、初期出目、液晶/ステージ等の本機固有確定・濃厚判別は `UNVERIFIED_AFTER_RESEARCH`。
- resetBehaviorQA: **PARTIAL**。設定変更時の状態再抽選は直接値あり、日跨ぎカウンタ/純電断/判別は未固定。

## 2014-08-04群監査

- 同日群の具体日付きパチスロとして確認した3機:
  1. **ニューアイムジャグラーEX-KT**（北電子）— 登録済み No.835
  2. **やじきた道中記乙**（メーシー）— 登録済み No.836
  3. **パチスロ ヘルシング**（北電子）— 登録済み No.837
- `2014年8月4日 / 2014-08-04 / 2014年08月04日` と `パチスロ / 導入 / ホール導入開始 / 導入開始日` を組み替え、K-Navi・HAZUSE・P-WORLD/パチビー系・業界記事を横断再監査。
- 8/4付業界記事の「パチスロ大海物語 with T-ARA」は**発表記事日**で、納品開始は10/6予定のため8/4導入機へ混入させない。
- 追加の具体日付き未登録5号機を固定できなかったため **2014-08-04_GROUP_CLOSED_FOR_CURRENT_RESEARCH**。

## 次境界の先行確認

- **2014-08-18「沖ドキ！」（アクロス）**を次の強い具体日アンカーとして確認済み（HAZUSE: 型式 沖ドキ！LL / 検定4S0298 / 導入開始2014-08-18）。
- ただし **2014-08-05〜08-17の境界監査は次回先に実施**し、未処理機がないことを確認してから08-18へ進む。日付の飛ばしをしない。

## 遡及 resetBehavior QA カーソル

- 新規収集を止めない。
- 次の遡及QAカーソルは `docs/real_machine_db/machines/2007-02_pachislot-tekken-den-tough.md`（パチスロ鉄拳伝タフ）を維持。

## safeguard

- `パチスロ ヘルシング / ヘルシング / HELLSING / ヘルシングTH / 北電子` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 1400G / 宵越し / 内部状態 / 低確 / 通常 / 高確 / ガックン / 50枚 / ベース` を組み合わせて再探索。
- 藤商事の別機種 **「ヴァン・ヘルシング」** を完全除外。
- K-Naviに「設定変更後の挙動」専用ページの存在は確認したが、現存キャッシュから本文を安全に取得できないため具体値の根拠には採用しない。
- 天井が「ボーナス間」でART当選ではリセットされないことと、日跨ぎの設定変更/据え置き/電断契約を混同しない。
- 2015-06-08到達時の **吉宗～極～（ヨシムネH2A4 / 3S1093）** 正式量産版処理注意を維持。

## 次回再開地点

1. **recordCount 837 / chronologicalFrontier 2014-08-04 / 08-04_GROUP_CLOSED_FOR_CURRENT_RESEARCH** から開始。
2. 最新mainで README / mission / INDEX / LATEST_HANDOFF / 837件目を再確認。
3. **2014-08-05〜08-17境界監査**をメーカー横断で実施。
4. 漏れがなければ次の強い候補 **2014-08-18「沖ドキ！」（アクロス）**から収集再開。
5. 08-18同日群も全メーカー横断監査し、未処理を順に処理してからCLOSED判定。
6. 遡及QAは `2007-02_pachislot-tekken-den-tough.md` から再開。

## 主要出典 — 取得日 2026-09-07

### パチスロ ヘルシング
- 北電子公式 検定情報: `https://www.kitadenshi.co.jp/slot-kentei/hellsing/`
- 北電子公式 最新情報: `https://www.kitadenshi.co.jp/funnews/slot/page/8/`
- パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kitac_slot/92/a.php`
- パチマガスロマガ ボーナス確率: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kitac_slot/92/h.php`
- K-Navi: `https://p-kn.com/slot/2099/`
- HAZUSE: `https://hazuse.com/machine/pachislot/3S1259/`
- HAZUSE AT/ART・内部状態: `https://hazuse.com/machine/pachislot/3S1259/genre/209/?hazu_scroll=genre_nav`
- P-WORLD: `https://www.p-world.co.jp/machine/database/7461`
- パチビー: `https://www.pachibee.jp/machines/index/214070002`
- スロパチクエスト: `https://www.slopachi-quest.com/article/hellsing/`
- パチトラ: `https://p-tora.com/i4124a4/`

### 2014-08-04同日群 / 次アンカー
- K-Navi ニューアイムジャグラーEX-KT: `https://p-kn.com/slot/2097/`
- K-Navi やじきた道中記乙: `https://p-kn.com/slot/2095/`
- K-Navi パチスロ ヘルシング: `https://p-kn.com/slot/2099/`
- グリーンべると 大海物語発表（納品10/6予定）: `https://web-greenbelt.jp/00007118/`
- HAZUSE 沖ドキ！: `https://hazuse.com/machine/pachislot/4S0298/genre/201/`
