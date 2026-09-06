# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **796**
- latestMachineAddedByChronology: **クイーンオアシス**（パイオニア / PIONEER）
- latestRecord: `docs/real_machine_db/machines/2014-02-17_queen-oasis.md`
- chronologicalFrontier: **2014-02-17**
- schema: **resetBehavior v0.7**
- status: **2014-02-17_GROUP_OPEN**

## 今回の同期 / 重要事項

- 最新mainの `README.md`、ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前レコード `2014-02-10_evangelion-ketsui-no-toki.md` を再読。
- INDEXは旧集約状態（19件）のためREADME規定どおり **LATEST_HANDOFF + 実レコード**を正本扱い。
- 作業開始時正本は **recordCount 795 / chronologicalFrontier 2014-02-10 / 02-10群CLOSED**。前のチャット想定よりmainが先行していたため、過去候補へ戻らず最新handoffから継続した。
- HAZUSE新台カレンダーでは2014年2月の導入アンカーが02-10の次に02-17となる。2014-02-11～02-16を検索語・資料系統を変えて境界監査したが、今回この区間で具体日付き未登録パチスロを固定できず `CLOSED_FOR_CURRENT_RESEARCH`。
- 前handoff候補 **2014-02-17「クイーンオアシス」**を796件目として追加。
- 02-17同日候補として前handoffの **「ジャックポット」（ヤーマ）**に加え、Pachisevenで **「吉宗～極～」（大都技研）導入日2014-02-17** を検出。後者は当時資料に大都直営店向け先行/別スペックを示す文脈もあるため、全国導入扱いか直営限定段階かを次回必ず精査し、対象時系列を誤らない。
- 02-17群はまだOPEN。HAZUSEカレンダーでは次の日付アンカーに02-18もあるため、同日群を閉じた後は02-18群へ進む。

## 今回追加 — クイーンオアシス

### identity / 性能コア

- manufacturer: **パイオニア / PIONEER**。
- hall start: **2014-02-17**（パイオニア公式更新履歴で「導入開始」）。公式製品一覧は2014年2月発売、当時グリーンべるとは2月中旬納品予定。
- generation/system: **5号機 / ノーマルAタイプ / 完全告知 / 25φ**。
- パイオニア公式は **クイーンハナハナ-30の確率・配列・演出・告知タイミングを完全踏襲**と明記。
- payout: **96 / 98 / 101 / 104 / 107 / 111%**。
- BIG: **1/309 / 297 / 284 / 270 / 256 / 240**。
- REG: **1/516 / 481 / 445 / 409 / 376 / 344**。
- 合算: **1/193 / 184 / 173 / 163 / 152 / 141**。
- basicPayout: **BIG最大312枚 / REG最大130枚**を業界・P-WORLD主値として採用。
- パチマガスロマガ本機ページにはREG「約135枚（130枚払い出し）」という逆転表記があり、平均せず **CONFLICT_SOURCE_NOTATION** として保持。
- baseGamesPer50: **UNVERIFIED_AFTER_RESEARCH**。完全踏襲元クイーンハナハナ-30には当時業界値 **平均37.5G/50枚** があるが、本機専用直接値として確認できないため自動転記しない。
- 型式名 / 検定番号: **UNVERIFIED_AFTER_RESEARCH**。
- recordStatus: **PARTIAL_CORE_WITH_RESET_BEHAVIOR_RESEARCHED**。

### resetBehavior v0.7

- ノーマルAタイプのためゲーム数天井、AT/ART/CZ通常モード、高確状態、リセット専用短縮天井は **NOT_APPLICABLE_NORMAL_TYPE**。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN**。
- 設定変更専用の朝一当選/CZ/モード恩恵・不利は **NONE / NOT_APPLICABLE_NORMAL_TYPE**。
- 設定変更時の本機固有リール初動、ガックン、初期出目、BGM等の変更判別は、機種名/25φ/姉妹機名/設定変更/リセット/朝一/据え置き等で再探索したが **UNVERIFIED_AFTER_RESEARCH**。
- 単純電源OFF→ONで朝一価値を持つ天井・モード・状態は非搭載。その他の本機固有電断特殊挙動も **NONE_CONFIRMED_AFTER_RESEARCH**。
- 姉妹機「クイーンハナハナ-30」には後年解析でガックン・87G以内BGM変更の観測情報があるが、25φ版へ1:1推測転記しない。

## conflicts / safeguards

- 「クイーンハナハナ-30完全踏襲」は公式が明示した範囲（確率・配列・演出・告知タイミング）を優先し、記載のない **ベース / resetBehaviorを推測コピーしない**。
- REG獲得はグリーンべると/P-WORLD最大130枚 vs パチマガスロマガ「約135枚（130枚）」の表記差を平均しない。
- 2014-02-17はパイオニア公式の導入開始日。2月中旬納品予定とは定義を分離。

## 2014-02-11～02-16境界 — CLOSED_FOR_CURRENT_RESEARCH

- HAZUSE新台カレンダーでは02-10の次が02-17。
- 表記揺れを含む導入日検索でも、この区間の具体日付き未登録パチスロを今回固定できずCLOSED。

## 2014-02-17同日群 — OPEN

処理済み:
- **クイーンオアシス**（パイオニア） — 796件目。

未処理/要確認:
1. **ジャックポット**（ヤーマ） — HAZUSEで2014-02-17、型式 `ジャックポットY6` / 検定3S0992。次の本線候補。
2. **吉宗～極～**（大都技研） — Pachisevenに2014-02-17導入日。ただし当時記事には大都直営店向け別スペック文脈があるため、全国ホール導入開始の定義・独立収集対象としての扱いを複数資料で精査する。
3. 02-17をメーカー横断で再監査し、上記以外のパチスロ候補がないか確認してから群を閉じる。

## 遡及resetBehavior QA 進捗

- QAカーソルは `2007-01_karate-baka-ichidai.md` の次の実ファイル順を維持。
- 今回は本線796件目を優先。既存性能coreStatusは変更なし。reset QAは性能完了判定とは別管理を維持。

## 次回再開地点

1. **recordCount 796 / chronologicalFrontier 2014-02-17 / 02-17群OPEN** から開始。
2. 最優先で **ヤーマ「ジャックポット」**を797件目候補として、性能コア + v0.7 resetBehaviorを収集。
3. 続いて **大都技研「吉宗～極～」**の2014-02-17導入定義を公式/業界/当時解析で確認。直営限定先行ならその事実を明記して時系列扱いを決める。独立全国機として適切なら次レコード候補。
4. 02-17同日全メーカー監査を完了してからCLOSED判定。
5. HAZUSEカレンダー上の次アンカー **2014-02-18** を監査する。
6. **「サムライスピリッツ～剣豪八番勝負～」は2014-04-07候補**として保持し、2月には入れない。
7. 遡及QAは `2007-01_karate-baka-ichidai.md` 直後の実ファイル順で継続。
8. PARTIAL / UNVERIFIEDは公式・業界・当時解析・古いDB・アーカイブ・回顧資料まで系統を変えて再探索し、競合は平均せずCONFLICT保持。

## 主要出典 — 取得日 2026-09-06

### クイーンオアシス
- パイオニア公式 更新履歴: `https://www.slot-pioneer.co.jp/news.html`
- パイオニア公式 2014年製品一覧: `https://www.slot-pioneer.co.jp/products/2014.html`
- パイオニア公式 発売のお知らせ: `https://www.slot-pioneer.co.jp/information/qoasis.html`
- グリーンべると / P-WORLD業界ニュース: `https://news.p-world.co.jp/articles/6267/greenbelt`
- パチマガスロマガ 機種概要: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/108/a.php`
- パチマガスロマガ ボーナス確率: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/108/h.php`
- P-WORLD: `https://www.p-world.co.jp/machine/database/7291`
- 5号機クロニクル パイオニア: `https://5goki.com/pioneer`
- 完全踏襲元ベース参照のみ / グリーンべると クイーンハナハナ-30: `https://web-greenbelt.jp/00001034/`

### 境界 / 次候補
- HAZUSE新台カレンダー: `https://hazuse.com/new-machine-calendar/newmachine-calendar/`
- HAZUSE ジャックポット: `https://hazuse.com/machine/pachislot/3S0992/`
- ベルコ公式（ヤーマ）ジャックポット: `https://www.s-bellco.co.jp/products/slot/yama_jackpot/`
- Pachiseven 吉宗～極～: `https://pachiseven.jp/machines/4129/cutout/4`
