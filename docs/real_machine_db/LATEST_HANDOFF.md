# 実機DB 最新リレー引継ぎ

更新日: 2026-09-02

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前正本は **301 `天晴招猫`（エマ / 2008-10・月精度）**。
- 2008年10月上旬〜13日を再監査し、具体日付きで301より後かつ10月14日より前と強く確定できる未処理候補を今回確定できなかったため、当時業界資料で納品日が明記された **302 `アカギ～永続の闘牌～`（藤商事 / 2008-10-14）** を追加。
- 302は性能コア + ミッションv0.7 `resetBehavior` を同時収集。

## 302. アカギ～永続の闘牌～

- record: `docs/real_machine_db/machines/2008-10-14_akagi-eizoku-no-tohai.md`
- manufacturer: 藤商事
- modelNumber: `アカギエイゾクノトウハイFSC`
- generation: 5号機
- releaseDate: **2008-10-14**。グリーンべると2008-09-08記事で「10月14日より納品」と明記。
- systemType: BIG非搭載、REG契機・継続率管理ART。
- ART: **20G/1セット、純増約+1.5枚/G**。REG成立時にART突入抽選、継続率は**50%〜最大90%以上**。藤商事公式・当時業界・K-Naviで主要構造を照合。
- 通常時天井: 旧解析資料で**天井なし**を確認。
- REG純増目安は現存パチマガスロマガの約5枚と2008年当時個人整理資料の約10枚で差があるため `CONFLICT`。平均しない。
- 機械割は後年回顧で **96 / 98 / 101 / 104 / 106 / 110%** を取得したが、当時解析の独立第二照合がないため `ANALYSIS_SINGLE`。
- 設定別REG/ART初当たり・50枚ベースは十分再探索後も比較可能な確定値を回収できず `UNVERIFIED_AFTER_RESEARCH`。
- `coreStatus: PARTIAL`。

### resetBehavior（302）

- `settingChangeBehavior`: `UNVERIFIED_AFTER_RESEARCH` — 設定変更時の通常状態/ART関連内部状態を直接確定できず。
- `carryOverBehavior`: `UNVERIFIED_AFTER_RESEARCH` — 据え置き時の状態引継ぎ条件を確定できず。
- `powerCycleBehavior`: `UNVERIFIED_AFTER_RESEARCH` — 電源OFF→ONのみの内部状態/表示/初期出目を確定できず。
- `gameCounterReset` / `ceilingAfterReset`: 通常天井なし資料を確認しており、朝一狙い用の通常天井G数は `NOT_APPLICABLE_OR_NONE_CONFIRMED`。リセット短縮天井も確認できず。
- `modeAfterReset` / `stateAfterReset`: `UNVERIFIED_AFTER_RESEARCH`。
- `advantageousSectionReset`: `NOT_APPLICABLE`（5号機・有利区間制度前）。
- `resetBenefits` / `resetPenalties`: `NONE_CONFIRMED_AFTER_RESEARCH`。
- `resetDetection`: `UNVERIFIED_AFTER_RESEARCH` — ガックン、初期出目、表示等の本機固有変更判別を確定できず。
- 公開朝一数値（リセット天井・モード振り分け・朝一当選率・恩恵発生率）: `NONE_CONFIRMED_OR_UNVERIFIED`。
- `resetBehaviorQA: PARTIAL_WITH_DEVICE_SPECIFIC_RESET_DETAILS_UNVERIFIED_AFTER_MULTI_SOURCE_RESEARCH`。

## 今回の主要出典

取得日: 2026-09-02

- https://www.fujimarukun.co.jp/products/akagi/
  - 藤商事公式。ART搭載、純増約1.5枚/G、REGULAR BONUS終了条件。
- https://news.p-world.co.jp/articles/3031/greenbelt
  - 2008-09-08グリーンべると。型式、ART20G/純増1.5枚/G、REG成立時ART抽選、継続率50%〜最大90%以上、2008-10-14納品開始。
- https://p-kn.com/slot/857/6903/
  - K-Navi。20G/1セット、継続率50〜90%、純増約1.5枚/Gを独立確認。
- https://p-kn.com/slot/857/
  - K-Navi機種ページ。BIG非搭載、REG+ART構造。設定別機械割/REGは未発表表示のため数値転記せず。
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/fuji_slot/08/a.php
  - パチマガスロマガ現存基本システム。REG約5枚、20GセットART。
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/fuji_slot/08/fuji_slot_08.php
  - 「ボーナス確率/PAYOUT/ART/攻め時・ヤメ時・設定変更時」専用項目の存在確認。本文未回収部分は推測しない。
- https://www.eightbeat.com/slot99/kishu/a_gyou/a/akagi/page_menu.html
  - 旧解析DB。天井なし、ART純増+1.5枚/G、2008年10月登場の独立確認。
- https://www.marimo0925.net/pachislot-kikaiwari-ranking-akagi-ban/
  - 後年回顧。設定別機械割96/98/101/104/106/110%。当時第二照合待ちのため `ANALYSIS_SINGLE`。
- https://plaza.rakuten.co.jp/kirialoverio/diary/200808250000/
  - 2008年当時個人整理資料。REG約10枚記述。高信頼資料の約5枚と競合するため正本化せず `CONFLICT` 保持。

## 境界監査・重複防止

- **既存302件の再追加禁止。**
- 301 `天晴招猫` は2008年10月上旬・月精度で処理済み。
- 302 `アカギ～永続の闘牌～` は2008-10-14納品開始で処理済み。
- `天地を喰らう` と `まつり屋華恋` は一次業界資料で **2008-10-19納品開始予定** を確認済み。
- `ハードボイルド～グリフォンの幻影～` は **2008-11-03納品予定** のため10月中旬群へ混入させない。

## resetBehavior 遡及QA

- 最終補完済み地点 **`球児（2006-09）`** を維持。
- 旧handoffで次候補として記録されてきた **「ジャックポット・トロピカルバージョン2（2006-09）」** は名称再監査が必要。2006年ヤーマ機は「ジャックポット トロピカルバージョン」表記が存在する一方、後年に別機 `Ver.2` があるため、2017年機等のresetBehaviorを混入させない。
- 今回repo内検索・実ファイル走査を行ったが、安全に同定できる既存レコードの実パスを確定できなかったため、**推測パスへのQA書き込みは実施していない**。既存COMPLETE_CORE/PARTIALを壊さないことを優先。
- 次回は2006年8〜10月の既存実ファイルを直接走査し、ヤーマ初代機の正しいレコードを同定してからv0.7 resetBehaviorを補完する。

## 次回再開地点

1. **LATEST_HANDOFF基準302件地点。2008-10-15〜18日の未処理機を再監査。**
2. 10月15〜18日に未処理がなければ、一次業界資料で **2008-10-19** 納品開始予定を確認済みの `天地を喰らう` / `まつり屋華恋` 同日群へ進む。既存登録を先に確認し重複禁止。
3. 遡及QAは `球児（2006-09）` の次から再開し、旧称「ジャックポット・トロピカルバージョン2」の実体をrepo既存レコードと当時資料で確定してから補完する。
4. PARTIAL/UNVERIFIEDは検索語・資料系統を変えて再探索し、競合は平均せず `CONFLICT` を維持する。
