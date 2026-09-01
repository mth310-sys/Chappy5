# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前は **288 `アカネ55`（NET / 2008-08-17納品開始予定）**。
- 今回、handoff指定の `メガラニカDX` を先に監査。2008-08-18検定通過痕跡は確認したが、実販売/ホール導入を裏付ける資料を確定できず、検定通過だけでは本線レコード化しなかった。
- 2008-08-18発売を旧業界追跡資料で確認できた **289 `ザ・ブルーハーツ`（銀座）** を追加。
- 性能コア + ミッションv0.7 `resetBehavior` を同時収集。

## 289. ザ・ブルーハーツ

- record: `docs/real_machine_db/machines/2008-08-18_the-blue-hearts.md`
- manufacturer: 銀座
- generation: 5号機
- systemType: ボーナス+CZ+押し順ART（ブルーハーツタイム）
- releaseDate: **2008-08-18**。slothistory旧追跡資料が発売日を明記し、当時グリーンべると2008-07-15記事の「8月中旬から納品予定」と整合。
- 設定構成は **1 / 3 / 5 / F**。
- ボーナス合算は **1/284.94 / 1/273.07 / 1/259.04 / 1/243.83**。P-WORLD/K-Naviで一致し、2008年旧解析記事も丸め差の範囲で照合。
- 設定別BIG単独/BONUS CHANCE単独はK-Naviが未発表表記。別系統で直接数値を確定できず `UNVERIFIED_AFTER_RESEARCH`。
- BIG約270枚、BONUS CHANCE約72枚。
- ART「ブルーハーツタイム」は36G完走型、約+1.2枚/G。次回ボーナスまで継続する無限系も存在。
- CZ「アンコールタイム」はボーナス後または通常時1200G消化で移行。1200Gはボーナス直接当選天井ではなくCZ移行契機として扱う。
- 50枚ベースは検索語・資料系統を変えて再探索したが比較可能値を確定できず `UNVERIFIED_AFTER_RESEARCH`。
- coreStatus: `PARTIAL_CORE_BASE_AND_INDIVIDUAL_BONUS_RATES_UNVERIFIED_WITH_PAYOUT_CONFLICT`

### CONFLICT（289）

- `CONFLICT_PAYOUT_RATE`
  - 5号機クロニクル: **98.0 / 101.0 / 105.0 / 109.0%**系列。ただし中間設定ラベルを「2」と掲載しており、本機の1/3/5/F設定構成と不整合。
  - 2008年当時解析記事: **96.4 / 99.4 / 103.3 / 107.1%**（設定1/3/5/F）。
  - 平均せず双方保持。101.0%を設定3へ自動補正しない。
- `CONFLICT_BONUS_PAYOUT_THRESHOLD`
  - パチマガスロマガ: BIG400枚超 / BONUS CHANCE100枚超払い出し終了。
  - 2008年旧解析: BIG345枚超 / BONUS CHANCE117枚超。
  - 純増目安約270枚/約72枚は一致するため、規定払い出し条件のみCONFLICTとして保持。

### resetBehavior（289）

- `settingChangeBehavior`: `UNVERIFIED_AFTER_RESEARCH` — 設定変更時の1200Gカウンタ/CZ/ART/高低状態処理を直接確定できず。
- `carryOverBehavior`: `UNVERIFIED_AFTER_RESEARCH` — 据え置き時の1200Gカウンタ/CZ/ART/内部状態引継ぎを直接確定できず。
- `powerCycleBehavior`: `UNVERIFIED_AFTER_RESEARCH` — 電源OFF→ONのみのカウンタ/CZ/ART/内部状態処理を直接確定できず。
- `gameCounterReset`: `UNVERIFIED_AFTER_RESEARCH` — 通常時1200GでCZ移行は確定。変更/据え置き/電断時の内部カウンタ処理は未確認。
- `ceilingAfterReset`: `UNVERIFIED_AFTER_RESEARCH` — 設定変更後の短縮/即CZ/別ゲーム数は確認できず。
- `modeAfterReset`: `UNVERIFIED_AFTER_RESEARCH` — CZナビ率系列と通常高低状態は存在するが変更時の振り分け/引継ぎは未確認。朝一専用モードは確認できず。
- `stateAfterReset`: `UNVERIFIED_AFTER_RESEARCH` — 高確/低確は確認できるが変更後開始状態は未確認。
- `advantageousSectionReset`: `NOT_APPLICABLE`（5号機・有利区間制度前）
- `resetBenefits`: `NONE_CONFIRMED_AFTER_RESEARCH`
- `resetPenalties`: `NONE_CONFIRMED_AFTER_RESEARCH`
- `resetDetection`: `UNVERIFIED_AFTER_RESEARCH` — K-Naviに本機専用「ガックン判別は有効?」項目の存在は確認したが、取得本文から結論/条件を回収できず、判別可否を推測しない。
- `numericResetData`: 通常CZ契機=1200G、ART=36G・約+1.2枚/G。設定変更時短縮天井/朝一当選率等の公開数値は未確認。

## 今回の主要出典

取得日: 2026-09-01

- https://web-greenbelt.jp/00003709/
  - グリーンべると2008-07-15。8月中旬納品予定、CZ/ART構造、通常1200GでCZ、ART36G/無限系、純増約+1.2枚/G、ボーナス獲得枚数、設定構成/合算端点。
- https://slothistory.com/kousin_kako05.html
  - 旧業界追跡資料。ザ・ブルーハーツ2008-08-18発売。別候補「ザ・ブルーハーツG」は8/18予定から9月へ変更された記録があるため通常版と分離。
- https://p-kn.com/slot/843/
  - K-Navi。設定1/3/5/F、合算1/284.94〜1/243.83、BIG約270枚、BONUS CHANCE約72枚、ART36G/約+1.2枚/G、専用ガックン判別項目の存在。単独ボーナス/機械割は未発表表記。
- https://www.p-world.co.jp/machine/database/5279
  - P-WORLD。合算と基本獲得枚数の照合。
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/ginza_slot/08/a.php
  - パチマガスロマガ。完走型ART/CZ、純増約+1.2枚/G、基本獲得、払い出し終了条件。
- https://5goki.com/ginza
  - 5号機クロニクル。2008年8月導入、機械割98.0〜109.0%系列。ただし中間設定ラベル不整合あり。
- https://ameblo.jp/gsummer/entry-10155505630.html
  - 2008年当時解析記事。別系列機械割96.4〜107.1%、合算照合、高確/低確状態、旧払い出し条件。

## 境界監査・重複防止

- **既存289件の再追加禁止。**
- `メガラニカDX` は2008-08-18検定通過痕跡までは確認したが、今回の再探索でも実販売/ホール導入を裏付けるメーカー/業界/旧DB資料を確定できなかった。現時点では `INSPECTION_ONLY_CANDIDATE_NOT_MAINLINE`。通常 `メガラニカ` と混同しない。
- `ザ・ブルーハーツG` は旧追跡資料で8/18予定から9月へ変更との記録。通常版と別候補として9月境界で実販売/型式を再確認する。
- `シオサイV-30` は2008-11-03納品開始予定が確認済みのため11月まで保留。
- `完熟チェリー` は2008年10月境界で再確認。
- 情報提供端子板対応日・検定通過日だけを導入日として扱わない。

## resetBehavior 遡及QA

- 最終補完済み地点 `球児（2006-09）` を維持。
- 2006年ヤーマ `ジャックポット トロピカルバージョン` の実ファイル同定問題は未解消。2017年 `Ver.2` と混同しない。
- 新規収集本線を止めない。

## 次回再開地点

1. **LATEST_HANDOFF基準289件地点。具体日付き本線は2008-08-18まで進行。**
2. 次は同日未処理候補 **`マジシャンEX（THE MAGICIAN / ファースト）`**。旧業界追跡資料で2008-08-18発売を確認、5号機クロニクルでも2008年8月導入。正式型式・機種名表記・性能コア・resetBehaviorを照合してから登録する。
3. 同日群を閉じた後、**`ロットエイトR（イープレイ）` 2008-08-25発売候補**を再確認。次回ボーナスまでの無限RT搭載との旧追跡資料があるため、性能/リセットのカウンタ・RT状態処理を重点確認する。
4. その後2008年8月下旬〜9月初旬を業界記事、P-WORLD、メーカー公式、旧解析DB、業界アーカイブで再監査し、最古未処理から続行。
5. v0.7 resetBehaviorは設定変更/据え置き/電源OFF→ON/ゲーム数・天井/モード・状態/有利区間/朝一恩恵・不利/変更判別/公開朝一数値を毎機種再探索し、十分な再探索後のみ `UNVERIFIED` とする。
