# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 開始時点は274件地点 `爺サマー（2008年7月下旬）` まで完了済み。
- 今回、2008年7月中旬の境界監査で時系列漏れを確認し、275 `パチスロ桃太郎電鉄`、276 `紅三四郎` を遡及追加。性能コア + v0.7 resetBehaviorを同時収集した。
- resetBehavior遡及QAは既存handoffどおり `球児（2006-09）` まで補完済み。次対象の2006年機ファイル同定問題は維持し、今回性能本線を優先した。

## 275. パチスロ桃太郎電鉄

- record: `docs/real_machine_db/machines/2008-07_pachislot-momotaro-dentetsu.md`
- commit: `e1f536802f9ceb7fc03696aa83e61bccfc15921f`
- manufacturer: サミー
- modelName: `桃太郎電鉄G`
- releaseDate: `2008-07-14 / 2008-07-15`
- releaseDatePrecision: `CONFLICT_EXACT_DAY_WITHIN_MID_JULY`
- systemType: ノーマル / ボーナス主体 + 7G演出RT / 技術介入
- coreStatus: `COMPLETE_CORE_WITH_PAYOUT_CONFLICT`

### 性能コア

- BIG: `1/293.9 / 282.5 / 266.4 / 249.2 / 234.1 / 216.3`
- MID: `1/390.1 / 366.1 / 337.8 / 309.1 / 283.7 / 257.0`
- 合算: `1/167.6 / 159.5 / 148.9 / 138.0 / 128.3 / 117.4`
- 50枚ベース: `35.05 / 35.35 / 35.67 / 35.99 / 36.33 / 36.69G`（単一旧解析値、ANALYSIS_SINGLE）
- BIG最大約311枚、MID最大約91枚。
- 特殊リプレイ後に7Gの短期RT。P-WORLDでは特殊リプレイ約1/75と掲載。
- 機械割は資料系列が競合:
  - Pachibee: `97.6 / 99.8 / 103.0 / 106.7 / 110.4 / 115.2%`
  - 旧スペック整理: `96.7 / 98.7 / 101.6 / 105.0 / 108.4 / 115.0%`
  - 旧解析シミュレーション: `98.5 / 100.6 / 103.5 / 106.9 / 110.3 / 114.6%`
- 平均せず `CONFLICT` として全系列を保持。
- 導入日は後年一覧の2008-07-14とPachibeeの2008-07-15が競合。どちらも7月中旬で、爺サマー（下旬）より前であることは確実なため漏れとして遡及追加。
- 2024年KONAMIスマスロ「桃太郎電鉄 ～パチスロも定番！～」のAT/天井/有利区間/リセット値は一切流用していない。

## 276. 紅三四郎

- record: `docs/real_machine_db/machines/2008-07_kurenai-sanshiro.md`
- commit: `82cbd006acf20ca28e968d5f111c167b6de1f978`
- manufacturer: JPS（ジェイピーエス）
- modelName: `紅三四郎SP`
- releaseDate: `2008-07-13 / 2008-07-14`
- releaseDatePrecision: `CONFLICT_PLANNED_SHIPMENT_VS_RELEASE_DAY`
- systemType: ボーナス + 30G完走型ループRT / 周期CZ
- coreStatus: `PARTIAL`

### 性能コア

- 赤BIG: `1/655.36 / 585.14 / 630.15 / 655.36 / 564.97 / 585.14`
- 青BIG: `1/655.36 / 655.36 / 585.14 / 564.97 / 585.14 / 546.13`
- CT: `1/682.67 / 712.35 / 630.15 / 546.13 / 546.13 / 496.48`
- 合算: `1/221.41 / 215.58 / 204.80 / 195.05 / 188.32 / 180.04`
- 赤BIG平均約308枚、青BIG平均約200枚、CT平均約155枚。
- 30G完走型RT、純増約`0.5枚/G`、最大ループ率90%。通常状態256G消化でも周期CZへ入る。
- 256Gはボーナス天井ではなく **RT突入契機となる周期CZ到達ゲーム数**。天井値と混同しない。
- 機械割は競合:
  - 5号機クロニクル/旧5号機wiki: `97.0 / 98.5 / 100.7 / 102.0 / 105.3 / 107.9%`
  - パチマガ旧攻略シミュレート: `96.73 / 98.14 / 100.06 / 101.46 / 103.75 / 105.68%`
- 50枚ベースは表記揺れ/型式/JPS/1000円/コイン持ちまで再探索後も未確定。
- グリーンべると一次記事は2008-07-13納品予定、旧業界史は2008-07-14発売。日付定義差として双方保持。

## v0.7 resetBehavior（275〜276）

### パチスロ桃太郎電鉄

- 2008年サミー機/型式 `桃太郎電鉄G` に限定し、設定変更/リセット/朝一/据え置き/電源OFF→ON/天井/モード/ガックンを旧解析・旧DB・回顧資料で再探索。
- 通常ゲーム数天井は旧解析で `なし`。`ceilingAfterReset: NOT_APPLICABLE`。
- 7G演出RTの設定変更/据え置き/電源断時残状態、本機固有ガックン/初期出目等は直接根拠を確定できず `UNVERIFIED_AFTER_RESEARCH`。
- 朝一専用モード/公開恩恵/不利/数値は `NONE_CONFIRMED_AFTER_RESEARCH`。
- `advantageousSectionReset: NOT_APPLICABLE`。

### 紅三四郎

- 通常状態256Gで周期CZへ入る仕様自体は一次業界資料で確認。
- 設定変更時に256G周期カウンタが0へ戻るか、据え置き/電源OFF→ONで引継ぐかは本機固有資料を確定できず `UNVERIFIED_AFTER_RESEARCH`。
- CZ/30G RT状態・残Gの設定変更/電源断処理も `UNVERIFIED_AFTER_RESEARCH`。
- 256Gは天井ではないため、リセット短縮天井は `NOT_APPLICABLE_OR_NONE_CONFIRMED`。
- 朝一専用モード/公開恩恵/不利/ガックン等は十分再探索後も未確定。
- `advantageousSectionReset: NOT_APPLICABLE`。

## 今回の主要出典

取得日: 2026-09-01

### パチスロ桃太郎電鉄
- https://www.pachibee.jp/machines/index/209090090
- https://www.p-world.co.jp/machine/database/5208
- https://pachinko.hatenablog.jp/entry/2008/07/momotaro-dentetsu
- https://kenslo65536.com/kaiseki/momotaroudentetu.html
- https://w.atwiki.jp/5gouki/pages/97.html
- https://piro-shiki.com/minashiki-tekkyo/
- https://initialp.cart.fc2.com/ca4/846/

### 紅三四郎
- https://web-greenbelt.jp/00003677/
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/jps_slot/15/h.php
- https://w.atwiki.jp/5gouki/pages/149.html
- https://5goki.com/jps
- https://slothistory.com/kousin_kako05.html

## 重複防止・境界管理

- 既存276件の再追加禁止。
- `パチスロ桃太郎電鉄` は2008年サミー5号機。2024年KONAMIスマスロと混同禁止。
- `紅三四郎` はJPS 2008年機。周期256Gはボーナス天井ではなくCZ周期。
- 274 `爺サマー` は7月下旬。今回275/276は番号上は後だが、境界監査で見つかった7月13〜15日の時系列漏れを遡及追加したもの。
- `海人 / 海人G-30` は旧業界史で2008-08-04発売資料があるため、7月残監査完了前に先行登録しない。

## resetBehavior 遡及QA

- 最終補完済み: `球児（2006-09）`。
- 次対象handoff表記: `ジャックポット・トロピカルバージョン2（2006-09）` 相当以降。
- 2006年ヤーマ系旧機と2017年別機の混同防止のため、実ファイル名/パスをツリーで同定してから補完する。
- resetBehavior節が既にある機種は飛ばし、既存性能コアを不用意に変更しない。

## 次回再開地点

1. **LATEST_HANDOFF基準276件地点。2008年7月下旬 `爺サマー` まで本線追加済みだが、7月中旬の漏れ2機を遡及追加済み。**
2. 次は同じ7月13〜14日境界の未処理候補 **`ミッション・イン・ポッシブー`** を最優先。グリーンべるとでは「7月中旬から納品予定」、旧業界史では `2008-07-14発売` が既に確認できているため、既存登録有無を再確認して未登録なら収集する。
3. その後 `スロットレッドライオン`（当時資料で7月中旬〜下旬導入予定）、`パチスロ桃太郎電鉄`周辺の同日群、`ゲッターロボ`（Pachibee 2008-07-22）を具体日で比較し、時系列漏れを閉じる。
4. `紅三四郎` は一次記事の2008-07-13納品予定と旧業界史の2008-07-14発売の差を解消できる一次資料が見つかればCONFLICT QA対象。
5. 7月残候補が閉じたら2008-08-04資料がある `海人 / 海人G-30` へ進む。
6. 欠損は表記揺れ・型式名・メーカー・シリーズ名と設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間等へ検索語を変え、公式・業界・当時解析・旧DB・アーカイブ・回顧資料を横断してから `UNVERIFIED` 判定する。
