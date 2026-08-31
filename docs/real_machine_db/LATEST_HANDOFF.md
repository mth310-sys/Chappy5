# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のままなので、README規定どおり `LATEST_HANDOFF.md` を進捗正本とする。
- 直前の進捗正本は190件目 `ナチユリ-30`。
- 本線指定の2007-10-10〜20について、日付別検索、当時業界ニュース、旧発売一覧、メーカー別5号機DB、回顧年表を再監査。内覧会/発表日は複数見つかったが、main未登録で10/21より早い実納品・ホール導入日を今回確定できる機種は確認できなかった。
- `哲也～雀聖と呼ばれた男～` は2007-10-10付K-Navi記事があるが、これは内覧会でありホールデビューは11月中旬予定。10月本線へ誤挿入しない。
- よって直前HANDOFFどおり **191件目として `元祖ハネスロ`（オーイズミ、2007-10-21納品開始）を追加済み。**
- 新規レコード: `docs/real_machine_db/machines/2007-10-21_ganso-haneslo.md`
- coreStatus: `COMPLETE_CORE`
- resetBehaviorQA: `PARTIAL`
- 新規レコードcommit: `b33195cbfbda4182a76602e690aeeae6e058bb80`

## 191. 元祖ハネスロ

- manufacturer: オーイズミ
- releaseDate: `2007-10-21（納品開始）`
- generation: 5号機初期
- systemType: ノーマル / ボーナス主体 / 2リール+倍倍リール / 同時成立あり
- coreStatus: `COMPLETE_CORE`
- resetBehaviorQA: `PARTIAL`

### 導入時期

- グリーンべると2007-09-07当時記事で **納品は2007-10-21から** と明記。
- 5号機クロニクルも2007/10導入として整理。

### 性能コア

パチマガスロマガ当時解析:
- 赤7×1: `1/229.95 → 1/276.52`
- 赤7×2: `1/297.89 → 1/238.31`
- 赤7×3: `1/327.68 → 1/199.80`
- ボーナス合成: `1/92.96 → 1/78.02`
- 機械割（シミュレート）: `95.57 / 98.75 / 102.66 / 106.42 / 109.71 / 113.00%`
- 1000円あたりゲーム数: `37.92 / 38.25 / 39.28 / 40.15 / 41.05 / 42.00G`
- 赤7×1: 約60枚
- 赤7×2: 約120枚
- 赤7×3: 約180枚
- RT/ART等の継続出玉機能は初代では確認なし。

### 機械割資料CONFLICT

- 5号機クロニクルの初代欄は `98.7 / 99.6 / 100.4 / 103.1 / 107.0 / 111.2%` と掲載。
- しかしこの数列は2016年 `元祖ハネスロ再び` の機械割と完全一致し、同じ初代欄でリール配列も「再び」と表示される。
- 当時パチマガ値、後年シリーズ回顧値（95.4〜113.1%）との比較から、5号機クロニクル側は資料混入疑義が強い。
- 平均・勝手な補正はせず `CONFLICT_SOURCE_CONTAMINATION_SUSPECTED` としてレコードに保持し、初代当時解析値を性能本線に採用。

### v0.7 resetBehavior

- settingChangeBehavior: 設定変更専用天井/モード/RT・ART恩恵 `NONE_CONFIRMED`、本機固有リール初期化等 `UNVERIFIED`
- carryOverBehavior: 通常時天井/モード持越し対象 `NONE_CONFIRMED`、成立済みボーナス等特殊状態 `UNVERIFIED`
- powerCycleBehavior: 電源OFF→ON専用の天井/モード変化 `NONE_CONFIRMED`、リール初期位置等 `UNVERIFIED`
- gameCounterReset: 通常時ゲーム数天井 `NONE_CONFIRMED`
- ceilingAfterReset: `NONE_CONFIRMED`
- modeAfterReset / stateAfterReset: `NONE_CONFIRMED`
- advantageousSectionReset: `NOT_APPLICABLE`
- resetBenefits / resetPenalties: `NONE_CONFIRMED`
- resetDetection: 本機固有ガックン/初期出目/表示差 `UNVERIFIED`
- numericResetData: `NONE_CONFIRMED`
- `元祖ハネスロ / オーイズミ / 倍倍リール / 2リール` と設定変更/リセット/朝一/据え置き/電断/天井/ガックン/変更判別を組み替え、当時攻略・業界記事・旧DB・回顧資料まで再探索済み。

## resetBehavior 遡及QA

- 2006年5〜6月群は既補完機を重複改変せず通過済み。
- 2006年7月 `新造人間キャシャーン`、`花盛` は補完済み。
- **2006年7月 `大江戸漫遊記` をv0.7 resetBehavior遡及QA済み。**
- 既存性能status `PARTIAL` は維持し、resetBehaviorQA=`PARTIAL` を別管理で追加。
- QA中にパチマガスロマガの現存ページを再取得でき、従来欠損だった性能コアも部分回復:
  - 1000円あたり `39.98 → 41.87G`
  - 赤7BIG 純増約413枚
  - 赤7・赤7・紫7 純増約82枚
  - 赤7・赤7・黒7 純増約54枚
  - P-WORLDで型式F-501 / 5号機ノーマルも確認
- 設定別ボーナス確率は攻略タブ存在までは確認したが数値本文を安定確保できず `UNVERIFIED` 維持。
- reset関連は `大江戸漫遊記 / F-501 / ファースト / FIRST` と設定変更/リセット/朝一/据え置き/電源OFF ON/天井/ガックン/初期出目を組み替えて再探索。
- 通常時ゲーム数天井、朝一専用モード、短縮天井、公開リセット恩恵は `NONE_CONFIRMED`。本機固有リール初期化・成立済みボーナス状態・ガックン等は `UNVERIFIED`。
- QA更新commit: `9857ac050321ee6f09265b3db462d821bd126240`
- **次の最古resetBehavior欠損候補は `電撃フランケン`（2006-07-24）。** 現レコードにresetBehavior節がないことを確認済み。

## 主要出典

### 元祖ハネスロ
- グリーンべると: https://web-greenbelt.jp/00006455/
- パチマガスロマガ 基本: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oizumi_slot/15/a.php
- パチマガスロマガ ボーナス/PAYOUT: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oizumi_slot/15/h.php
- パチマガスロマガ ベース: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oizumi_slot/15/c.php
- パチマガスロマガ 攻略トップ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oizumi_slot/15/oizumi_slot_15.php
- K-Navi: https://p-kn.com/slot/651/
- 5号機クロニクル: https://5goki.com/oizumi
- ハネスロシリーズ回顧: https://www.marimo0925.net/pachislot-kikaiwariranking-haneslo-ban/

### 大江戸漫遊記 QA
- 5号機クロニクル: https://5goki.com/first
- グリーンべると: https://web-greenbelt.jp/00004987/
- パチマガスロマガ 基本: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/first_slot/01/a.php
- パチマガスロマガ ベース: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/first_slot/01/c.php
- パチマガスロマガ 攻略トップ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/first_slot/01/first_slot_01.php
- P-WORLD: https://www.p-world.co.jp/machine/database/4239

取得日: 2026-09-01

## 10月本線監査メモ

- `哲也～雀聖と呼ばれた男～`: 10/9〜10内覧会、ホールデビュー11月中旬予定。10月本線へ入れない。
- `元祖ハネスロ`: 10/21納品開始を当時業界記事で確定し191件目登録済み。
- `パチスロ湘南爆走族`: main独立レコード未確認。当時パチスロ業界史更新記録で **2007-10-22発売**、5号機クロニクルも2007/10。
- `マジックモンスター2`: 同じ当時記録で **2007-10-22発売**。main独立未登録候補。
- 次回はまず10/21同日・10/22群の漏れを短く監査し、最古未登録を追加する。湘南爆走族/マジックモンスター2の同日順は資料精度で無理に決めず、両方処理対象とする。
- `CANスロ` は複数資料で2007/11のため11月キュー維持。

## 次回再開地点

1. **LATEST_HANDOFF基準191件地点から継続。**
2. 2007-10-21同日漏れを最終確認し、なければ2007-10-22の `パチスロ湘南爆走族` / `マジックモンスター2` をmain既存有無→具体発売/納品日→性能コア→resetBehaviorの順で処理する。
3. 同日複数機は資料上の時間順を推測しない。漏れなく双方を収集する。
4. resetBehavior遡及QAは **2006-07-24 `電撃フランケン`** から再開。既存性能コアstatusは不用意に崩さず、resetBehaviorQAを別管理する。
5. PARTIAL/UNVERIFIEDは表記揺れ・型式・メーカー・シリーズ・設定変更/リセット/朝一/据え置き/電断/天井/モード/ガックン/有利区間を組み替え、公式・業界・当時解析・旧DB・アーカイブ・回顧資料を横断する。
6. 競合値は平均せず `CONFLICT`。別機種・後継機仕様は流用しない。
