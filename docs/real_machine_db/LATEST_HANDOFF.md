# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のままなので、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前地点は204件目 `ビーチクラブ`。
- main内検索で `パチってスロット` の既存/別名レコードがないことを確認。
- 2007年11月候補として性能コアとv0.7 resetBehaviorを再探索し、**205件目 `パチってスロット` を追加済み。**

## 205. パチってスロット

- new record: `docs/real_machine_db/machines/2007-11_pachitte-slot.md`
- commit: `4bf04fadc3eb040923b1b49bba8c771a006f1e3c`
- manufacturer: スパイキー
- generation: 5号機
- systemType: ノーマル / ボーナス主体 + 3GプチRT
- coreStatus: `COMPLETE_CORE`
- resetBehaviorQA: `PARTIAL`

### 導入・型式

- 5号機クロニクル: 導入 `2007/11`。
- K-Naviにスパイキー「パチってスロット」のプレス説明会記録が現存。
- P-WORLD型式名: `パチッテスロットA`。
- 日単位のホール導入/納品日は、表記揺れ・型式・メーカー・プレス説明会・導入・納品を組み替えて再探索したが確定できず、月精度 `2007-11` を採用。

### 性能コア

パチマガスロマガ / P-WORLDで主要ボーナス値を照合:
- BIG: `1/257.00 → 1/227.56`（設定途中は非単調）
- REG: `1/387.79 → 1/225.99`（設定途中は非単調）
- 合算: `1/154.57 → 1/113.38`
- 1000円ベース: 設定1〜5 `36.27G`、設定6 `37.96G`。K-Naviでも一致。
- BIG: 規定払い出し252枚、純増約247枚。
- REG: 規定払い出し98枚、純増約104枚。
- 白BAR入賞後3GのプチRT。

### 機械割 CONFLICT

平均せず双方保持:
- パチマガスロマガ・シミュレート: `96.21 / 97.98 / 99.71 / 101.46 / 103.26 / 108.56%`
- 5号機クロニクル: `96.0 / 98.1 / 100.0 / 102.0 / 104.0 / 110.0%`

### プチRT詳細 CONFLICT

- パチマガスロマガ: プチRT中リプレイ設定1〜5 `1/1.27`、設定6 `1/1.28`。
- K-Navi: 全設定共通 `1/1.25`。
- 主要物差し値ではないが詳細競合としてレコードに保持。

### v0.7 resetBehavior

- settingChangeBehavior: 設定変更時の3GプチRT残状態/初期状態は `UNVERIFIED_AFTER_RESEARCH`。
- carryOverBehavior: 据え置き時プチRT残G・内部状態は `UNVERIFIED_AFTER_RESEARCH`。
- powerCycleBehavior: 電源OFF→ON時プチRT残G・内部状態は `UNVERIFIED_AFTER_RESEARCH`。
- gameCounterReset: 通常時ゲーム数天井は `NONE_CONFIRMED`。
- ceilingAfterReset: 短縮天井/変更後専用天井 `NONE_CONFIRMED`。
- modeAfterReset: 朝一専用モード/設定変更時モード振り分け `NONE_CONFIRMED`。
- stateAfterReset: 3GプチRT中の変更/電断時残状態処理 `UNVERIFIED_AFTER_RESEARCH`。
- advantageousSectionReset: `NOT_APPLICABLE`。
- resetBenefits / resetPenalties: 公開朝一固有恩恵・不利要素 `NONE_CONFIRMED`。
- resetDetection: 本機固有ガックン/初期出目/液晶・ランプ等による変更判別 `UNVERIFIED_AFTER_RESEARCH`。
- numericResetData: 公開された設定変更時専用数値は確認できず。

主要出典:
- パチマガスロマガ 基本システム: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/spiky_slot/01/a.php
- パチマガスロマガ ボーナス/機械割: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/spiky_slot/01/h.php
- パチマガスロマガ 小役/ベース: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/spiky_slot/01/c.php
- K-Navi 小役/ベース: https://p-kn.com/slot/661/4091/
- P-WORLD: https://www.p-world.co.jp/machine/database/4950
- 5号機クロニクル: https://5goki.com/spiky
- K-Navi 展示会導線: https://p-kn.com/slot/661/direct/

## 直前の既存群

- 200件目 `超お父さん2`
- 201件目 `哲也～雀聖と呼ばれた男～`
- 202件目 `赤ドン`
- 203件目 `ファイアーヒーローS`
- 204件目 `ビーチクラブ`
- 205件目 `パチってスロット`

## 境界監査メモ

- `パチスロシティーハンター` はグリーンべると2007-11-09記事で **納品12月6日開始予定** を確認済み。12月キューへ送る。
- 2007年一覧系では11月に `NEO花物語 / スーパービンゴV / パチってスロット / ビーチクラブ / ファイアーヒーローS / 哲也 / 華一番 / 華一番30 / 赤ドン / 超お父さん2` 等が確認される。既存レコード有無をmainで再走査し、11月漏れを閉じてから12月へ進む。
- `パチってスロット` は今回登録済み。日単位導入日は未確定。

## resetBehavior 遡及QA

### クランキーコンドルX（2006-08）

- 既存性能コア値・既存CONFLICTを維持したままv0.7 `resetBehavior` 追加済み。
- QA commit: `866b551249aab530513527a8dae09955e359ad9c`
- 次は2006年8月群の既存レコードを時系列走査し、resetBehavior節未収集の最古機から継続。

## 次回再開地点

1. **LATEST_HANDOFF基準205件地点から継続。**
2. 2007年11月をメーカー別一覧・当時業界記事・導入カレンダー・旧DBで最終境界監査し、既存レコードがない最古の11月候補があれば先に処理する。
3. 特に `華一番30` を独立スペックとして収録済みか、`華一番` レコードへ混在していないかmainで確認する。兄弟25φ/30φは根拠なしに同一性能扱いしない。
4. 11月漏れが閉じたら、**2007-12-06納品開始予定確認済み `パチスロシティーハンター`** を12月キューの有力候補として処理する。ただし12月1〜5日または月精度候補に未処理があれば時系列優先。
5. `パチってスロット` 追加QAは具体導入日、設定変更/据え置き/電断時3GプチRT状態、本機固有変更判別を優先。
6. `ビーチクラブ` 追加QAは50枚ベース、設定変更/据え置き/電断時CZ・RT状態、変更判別、発売/導入時期競合の解消を優先。
7. resetBehavior遡及QAは `クランキーコンドルX` の次の既存レコードを時系列走査し、2006年8月群（`じゃりン子チエ` / `ランブルローズ` / `逮捕しちゃうぞ` 等）の既補完有無をmainで確認してから処理。
8. 既存 `COMPLETE_CORE` は性能コア完了判定を不用意に崩さず、resetBehaviorQAを別管理する。
9. PARTIAL/UNVERIFIEDは表記揺れ・型式・メーカー・シリーズ・設定変更/リセット/朝一/据え置き/電断/天井/モード/ガックン/有利区間を組み替え、公式・業界・当時解析・旧DB・アーカイブ・回顧資料を横断する。
10. 競合値は平均せず `CONFLICT`。別機種・兄弟スペック・後継機仕様は根拠なしに流用しない。

取得日: 2026-09-01
