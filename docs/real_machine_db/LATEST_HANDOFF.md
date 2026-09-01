# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前handoffは257件地点 `ニューパルサーエボリューション（2008-05-25納品開始予定）` まで完了。
- 今回、2008年5月境界の再監査で、ユニバーサル公式が **2008年5月発売** と明記する未登録機 `キングガッパ` を確認。具体日を推測せず月精度で**遡及追加し258件地点**へ前進。
- resetBehavior遡及QAは `球児（2006-09）` まで補完済み。次対象は `ジャックポット・トロピカルバージョン2（2006-09）` 以降。今回は新規収集を優先し遡及QAは進めていない。

## 258. キングガッパ（エレコ）

- record: `docs/real_machine_db/machines/2008-05_king-gappa.md`
- commit: `338487991d6725a9c1c2e0f9e4171e6cf1bce21e`
- modelName: `リーチ目発見スロガッパ1`
- releaseDate: `2008-05`（日単位UNVERIFIED）
- systemType: ノーマル/Aタイプ・天井RT・技術介入
- coreStatus: `COMPLETE_CORE_WITH_CONFLICTS`
- resetBehaviorQA: `PARTIAL_CEILING_STRUCTURE_CONFIRMED_RESET_PROCESS_UNVERIFIED`

### 主要性能

設定構成は当時解析系で `1 / 4 / 6 / H`。

- BIG合成: `1/295.21 / 1/277.69 / 1/254.02 / 1/227.56`
- REG: `1/409.60 / 1/364.09 / 1/324.44 / 1/284.94`
- 合成: `1/171.56 / 1/157.54 / 1/142.47 / 1/126.52`
- 1000円ベース: `37.36 / 37.80 / 38.24 / 38.70G`
- BIG: 約310〜312枚
- REG: 約104枚
- BIG後1000G / REG後800Gで次回ボーナスまで天井RT。純増は現状維持〜微増程度だが、精密純増/Gは今回未確定。

### CONFLICT

- `CONFLICT_PAYOUT_DEFINITION`
  - パチマガスロマガ・シミュレート: `98.78 / 102.39 / 107.39 / 113.93%`
  - P_Style777: `97.8 / 102.5 / 107.1 / 113.1%`
  - 5号機クロニクル: `99.0 / 102.5 / 107.2 / 113.3%`
  - 算出/攻略条件差を疑い、平均化せず全系列保持。
- `CONFLICT_SETTING_LABEL_SECONDARY`
  - 当時解析系は `1/4/6/H`。
  - 5号機クロニクルは `1/4/5/6` 表記で同系統値を掲載するため後年整理のラベル競合として隔離。
- `CONFLICT_BONUS_PROBABILITY_SECONDARY`
  - P-WORLDの設定4/6/HのBIG/REG確率がパチマガスロマガ・P_Style777一致系列と軽微〜中程度に差。主値は当時解析二系統一致側を採用。
- `RELEASE_DATE_DAY_UNVERIFIED`
  - ユニバーサル公式・5号機クロニクル・当時更新資料で2008年5月までは一致するが、納品開始/全国導入の具体日は再探索後も未確定。

### v0.7 resetBehavior

- 通常時天井構造自体は **BIG後1000G / REG後800G** で確定。
- `settingChangeBehavior`: 設定変更時の天井G数クリア/引継ぎを直接示す本機固有本文を取得できず `UNVERIFIED_AFTER_RESEARCH`。
- `carryOverBehavior`: 据え置き時の天井G数引継ぎを直接示す資料は未確定。
- `powerCycleBehavior`: 電源OFF→ONだけの場合の天井カウンタ/初期出目/RT状態は未確定。
- `gameCounterReset`: 天井構造は確認済みだが設定変更/電断時処理は `UNVERIFIED_AFTER_RESEARCH`。
- `ceilingAfterReset`: 設定変更時のみ短縮される公開数値は `NONE_CONFIRMED`。
- `modeAfterReset`: 通常モード抽選型ではないため `NOT_APPLICABLE_CONFIRMED_STRUCTURE`。
- `stateAfterReset`: 天井RT滞在中の設定変更/電断時処理は `UNVERIFIED_AFTER_RESEARCH`。
- `advantageousSectionReset`: `NOT_APPLICABLE`。
- 朝一専用恩恵/不利・公開朝一数値: `NONE_CONFIRMED`。
- `resetDetection`: ガックン、初期出目、ランプ等の本機固有判別情報は再探索後も `UNVERIFIED_AFTER_RESEARCH`。

## 今回の主要出典

取得日: 2026-09-01

### キングガッパ
- https://www.universal-777.com/product/slot/king_gappa/
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/73/h.php
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/73/c.php
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/73/a.php
- https://www.p-world.co.jp/machine/database/5195
- https://ps777.net/data/universal/king-gappa.htm
- https://5goki.com/universal
- https://slothistory.com/kousin_kako05.html

## 重複防止

- 既存257件の再追加禁止。
- 258 `キングガッパ` も再追加禁止。
- `キングガッパ` は日付を推測せず `2008-05` の月精度で遡及追加済み。後続QAで具体導入日が確定した場合はreleaseDateのみ更新する。
- `ニューパルサーエボリューション` は5/26候補ではなく **5/25納品開始予定** として処理済み。
- `犬キングX` はP-WORLDで **2008年8月導入** と確認済みのため5月キューから除外し、8月時点で未処理なら登録する。

## resetBehavior 遡及QA

### 次の対象

- **`ジャックポット・トロピカルバージョン2（2006-09）` 以降のv0.7未補完レコードを既存順で監査。**
- 既にresetBehavior節がある場合は飛ばし、性能コアをやり直さずresetBehaviorのみ補完する。

## 次回再開地点

1. **LATEST_HANDOFF基準258件地点。2008年5月境界で `キングガッパ` まで遡及追加済み。**
2. 2008-05-20〜31をメーカー別一覧・旧DB・当時記事で再監査し、月精度候補 `ヒミコスタイル`、`MAX448`、`ファイアーヒーロー2` 等の具体導入日を優先して確定する。
3. `ヒミコスタイル` は2008-05-15発表会・5/20業界記事・6/19時点の導入実戦記までは確認済み。5月末か6月かを型式/旧DB/当時ホール導入記録で詰め、時系列位置を確定後に登録。
4. `MAX448` は当時資料で2008年5〜6月発売という記録があるため、5月境界漏れか6月機かを確定するまで自動配置しない。
5. 具体日候補では `アルティメットブレイク拳` が後年実機回顧で **2008-06-02設置時期**、ユニバーサル公式で2008年5月発売。5月境界監査後の最古未処理候補として扱う。
6. `ソニックライブ`、`ファイアーヒーロー2` 等も6月候補を日付順に並べ直し、同日他メーカー漏れを横断監査する。
7. resetBehavior遡及QAは `ジャックポット・トロピカルバージョン2（2006-09）` から継続。
8. 欠損は表記揺れ・型式名・メーカー・シリーズ名と、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間等へ検索語を変え、公式・業界・当時解析・旧DB・アーカイブ・回顧資料を横断してから `UNVERIFIED` 判定する。
