# 実機DB 最新リレー引継ぎ

更新日: 2026-09-05

## 現在地点

- recordCount: **685**
- latestMachineAdded: **パチスロ リングにかけろ1 ギリシア十二神編**（サミー）
- latestRecord: `docs/real_machine_db/machines/2012-09-18_ring-ni-kakero1-greece-twelve-gods.md`
- chronologicalFrontier: **2012-09-18**
- frontierLatestExactDateMachine: **パチスロ リングにかけろ1 ギリシア十二神編**
- schema: **resetBehavior v0.7**
- status: **CLOSED_2012-09-18_GROUP__NEXT_2012-09-24_TROPICANA_25_30_AUDIT**

## 今回の同期・時系列監査

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、最新レコードを確認して開始。
- INDEXは初期19件時点の古い集計だが、README規則どおりより新しい `LATEST_HANDOFF.md` を進捗正本として採用。
- 開始時正本は recordCount 684 / chronologicalFrontier 2012-09-10 / 最新機種「パチスロ聖闘士星矢」。
- 前handoffで09-10同日群の次候補だったベルコ「リーチラッシュ」を再確認した結果、ベルコ公式で **2012年9月登場のパチンコ「CRリーチラッシュ」** と確認。本DBはパチスロ本線のため対象外。誤追加せず09-10群をCLOSEDとした。
- 2012-09-11〜09-17境界を再監査し、ALL7.jp上の次の具体日付きパチスロは2012-09-18「パチスロ リングにかけろ1 ギリシア十二神編」。
- 09-18同日についてALL7.jpでは他2機種はパチンコ（CR闘牌伝説アカギ2、ぱちんこCR蒼天の拳 天授）で、パチスロはリンかけのみ。今回09-18群をCLOSEDとした。
- 2012-09-24の次アンカーとしてエレコ「トロピカーナ」を確認。メーカー公式・業界資料では25φ/30φの2タイプ同時発売。K-Naviは25φを2012-09-24導入、みんスロ/P-WORLDは30φを同日扱い。なお30φは沖縄県で2012-08-09先行導入の当時業界記事があるため、全国導入日と先行導入日の定義差を次回必ず保持する。

## 今回の本線追加 — パチスロ リングにかけろ1 ギリシア十二神編

### 識別

- manufacturer: **サミー**
- releaseDate key: **2012-09-18**
- generation: **5号機**
- systemType: **ART / ボーナス非搭載 / 規定ゲーム数解除 + CZ / セット継続**
- modelName: 後年中古実機資料に「リングにかけろ1 ギリシア十二神編X」表記あり。ただし一次資料未確認のため注記付き。
- approvalNumber: `UNVERIFIED_AFTER_RESEARCH`

### 性能コア

- 機械割: **97.1 / 99.0 / 102.1 / 105.3 / 110.1 / 115.1%**
- ART初当たり: **1/302.3 / 291.3 / 270.8 / 249.1 / 227.0 / 198.1**
- 50枚ベース: **約30G**。K-Navi当時実戦の「1Kあたり30Gは回るハズ」を根拠とする近似値で、メーカー公表値ではない。
- ART「ブーメランRUSH」: **約+2.0枚/G、1セット50G+継続バトル**。
- CZ「影道の塔」: **20G、ART期待度約30%**。
- 通常モード別最大規定G: **A 1024G / B 1240G / C 1240G / 天国128G / 超天国128G**。
- 通常最大天井: **ART間1240G**。

### resetBehavior v0.7

- `settingChangeBehavior`: **GAME_COUNT_CLEARED_AND_MODE_RESELECTED_CONFIRMED**。
- `gameCounterReset`: **RESET_ON_SETTING_CHANGE_CONFIRMED**。設定変更で前日の天井進捗をクリア。
- `ceilingAfterReset`: **SHORTENED_MAX_900G_CONFIRMED_PERIOD_ANALYSIS**。2012-10-16当時解析で、設定変更後に900Gを超える規定Gが選ばれた場合は900Gへ書き換えられるため最大天井900G。
- `modeAfterReset`: **PUBLIC_DISTRIBUTION_CONFIRMED**。
  - 設定1〜3: 通常A 50.0 / B 25.0 / C 5.0 / 天国 19.75 / 超天国 0.25%
  - 設定4〜6: 通常A 32.5 / B 32.5 / C 10.0 / 天国 24.75 / 超天国 0.25%
  - 天国以上合計: 設定1〜3 **20.0%** / 設定4〜6 **25.0%**
- `carryOverBehavior`: **UNVERIFIED_AFTER_RESEARCH**。据え置き時の完全なカウンタ/モード/状態保持契約を直接確定できず。
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**。
- `stateAfterReset`: **UNVERIFIED_AFTER_RESEARCH**。
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN**。
- `resetBenefits`: **最大天井1240G→900G短縮**、上記設定変更時モード振り分け。
- `resetPenalties`: **PREVIOUS_DAY_CEILING_PROGRESS_LOST**。
- `resetDetection`: ガックン・初期出目等の確定判別は **UNVERIFIED_AFTER_RESEARCH**。当時解析では「朝一ノーボーナス=変更」とは限らない旨が明記。
- `publicMorningNumbers`: 上記リセットモード振り分けと最大900Gを保存。

### CONFLICT / QA

- 5号機クロニクル検索断片に本機をA+ART、BIG約204枚/REG約54枚とする記述があるが、サミー公式、当時業界記事、P-WORLD、K-Navi、パチマガスロマガはいずれもボーナス非搭載ART特化型として一致。前作等の情報混入可能性が高く、主仕様へ採用せず `CONFLICT_SOURCE_ANOMALY` とした。
- 2020年以降の後継機仕様は混入させていない。

## 遡及resetBehavior QA 進捗

- 前handoffから継続するQA再開地点は変更しない。
- 遡及QA次回再開地点: **`docs/real_machine_db/machines/2007-01_karate-baka-ichidai.md`**。
- 本線の時系列収集を止めず、QAは別リレーで既存レコードのresetBehavior欠損だけ補完する。

## 次回再開地点

1. **recordCount 685 / chronologicalFrontier 2012-09-18 / 09-18同日群CLOSED**から開始。
2. 2012-09-19〜09-23境界をメーカー一覧・当時業界記事・旧DBで監査。
3. 次の既知具体日アンカーは **2012-09-24「トロピカーナ」シリーズ（エレコ）**。
4. トロピカーナはメーカー公式で **25φ / 30φの2タイプ同時発売**を確認済み。全機種方針上、型式/仕様差を確認して独立レコード化の要否を判断する。過去の30φ派生機と同様、別型式・別市場仕様として比較価値があれば分離する。
5. 30φはグリーンべるとで **2012-08-09沖縄先行導入**、全国は9月下旬予定。全国導入2012-09-24との定義差を平均化せず保持する。
6. 9月後半候補として「キュインぱちすろ南国育ち 1st vacation」「覇王伝 零」「戦人」「マハロ-30」「ニューワンバー-30」等の一覧表記が過去監査に出ているが、すでに9/3登録済みの機種と別日候補が混在するため必ずrepo重複と具体日を再照合する。
7. PARTIAL/UNVERIFIED/reset欠損は表記揺れ・型式名・メーカー・シリーズ名と検索語を変え、公式・業界・当時解析・古いDB・アーカイブ・回顧資料を横断後に判定。競合は平均せずCONFLICT。

## 主要出典 — 取得日 2026-09-05

### パチスロ リングにかけろ1 ギリシア十二神編
- Sammy公式: `https://www.sammy.co.jp/japanese/product/pachislot/ringnikakero/`
- 娯楽産業 展示会記事: `https://www.goraku-sangyo.com/%E3%82%B5%E3%83%9F%E3%83%BC%E3%80%80%E3%80%8C%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD-%E3%83%AA%E3%83%B3%E3%82%B0%E3%81%AB%E3%81%8B%E3%81%91%E3%82%8D1-%E3%82%AE%E3%83%AA%E3%82%B7%E3%82%A2%E5%8D%81/`
- グリーンべると: `https://web-greenbelt.jp/00001600/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6828`
- K-Navi: `https://p-kn.com/slot/1698/`
- パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/135/a.php`
- 2-9伝説 設定変更後モード（2012-10-16）: `https://2-9densetsu.com/blog-entry-1195.html/`
- 2-9伝説まとめ: `https://29den.com/ringnikakero-greece/`
- ALL7.jp 2012年9月: `https://www.all7.jp/plans/index/2012/09`
- パチビー: `https://www.pachibee.jp/machines/about/212080002`

### QA / 次アンカー
- ベルコ公式 CRリーチラッシュ（パチンコ確認）: `https://www.s-bellco.co.jp/products/pachinko/reach_rush/`
- ユニバーサル公式 トロピカーナ: `https://www.universal-777.com/product/slot/tropicana_2012/`
- K-Navi トロピカーナ25φ: `https://p-kn.com/slot/1695/`
- グリーンべると トロピカーナ沖縄先行導入: `https://web-greenbelt.jp/00001598/`
- P-WORLD トロピカーナ-30: `https://www.p-world.co.jp/machine/database/6827`

## GitHub commits

- パチスロ リングにかけろ1 ギリシア十二神編 machine record: `eb6098068b9dbb55b59a5eb91c58aad8718d9cf1`
