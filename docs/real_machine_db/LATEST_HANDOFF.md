# 実機DB 最新リレー引継ぎ

更新日: 2026-09-02

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前進捗を再取得して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前HANDOFFは355件地点 `クラシックジャグラー`（2009-04-13）。既存355件を再追加せず、4/13同日群の未処理機を監査。
- ALL7で2009-04-13導入予定のコルモ `シーシー` を確認し、GitHub既存レコードを検索して未登録を確認。
- **今回 356「シーシー」を追加。既存356件の再追加禁止。**

## 355. クラシックジャグラー（継承）

record:
- `docs/real_machine_db/machines/2009-04-13_classic-juggler.md`

要点:
- 北電子 / 型式 `クラシックジャグラーIII`
- 2009-04-13導入開始。
- ノーマル / 完全告知 / ボーナス主体。
- 公式機械割96.9〜107.4%、BIG 1/287.4〜1/240.9、REG 1/420.1〜1/309.1、50枚ベース35.24〜36.37G、BIG約312枚、REG約117枚。
- 天井なし。resetBehaviorは朝一価値に関わる専用恩恵なしを確認しつつ、機種固有の電断/ガックン等はUNVERIFIED_AFTER_RESEARCH。
- commit: `bcaad8ff882a0f25a7ae9fa5c2bcb4bad3b10643`

## 356. シーシー

record:
- `docs/real_machine_db/machines/2009-04-13_cc-colmo.md`

要点:
- manufacturer: コルモ
- formalModelName: `シーシー1`
- 検定番号: `8S1325`（P-WORLD）
- releaseDate主値: **2009-04-13**（ALL7）。P-WORLD/パチンコビスタ等は2009年4月で整合。
- releaseDate conflict: 777パチガブのみ **2009-02-23** 表記。検定時期との混同可能性を推測で断定せず、CONFLICTとして保持。
- generation: 5号機
- systemType: ノーマル / ネオストック / ボーナス主体 / 4ライン
- settings: 1 / 2 / 3 / 4 / 5 / 6
- 機械割主系列: **96.1 / 97.7 / 99.7 / 101.8 / 104.6 / 108.1%**（P-WORLD）。旧解析は設定6のみ108.0%で丸め差CONFLICT。
- 成立ベースBIG: 全設定 **1/256.0**
- 赤7REG: 全設定 **1/409.6**
- 太鼓REG: 全設定 **1/1024.0**
- CB: 全設定 **1/2048.0**
- 成立ボーナス合算: 全設定 **1/128.0**
- 実質ボーナス出現率: **1/162.69 → 1/129.81**。ネオストック機のため成立確率と実質出現率を混ぜない。
- BIG約312枚、REG約104枚、CB約26枚。
- 5号機初とされるボーナスストック機能。複数ボーナス貯留ではなく、成立後に純ハズレを待って入賞可能になるネオストック方式。
- 連チャン/通常/ハマリ状態の純ハズレは1/16.0、1/41.0、設定1 1/197.4〜設定6 1/64.0。方式比較に必要な最小限として保持。
- 50枚ベースは、機種名/型式/メーカーと50枚・1000円・千円・コイン持ち・ベースを組み替え、P-WORLD、パチンコビスタ、旧解析、機種DB、中古機資料を横断したが直接掲載値を確定できず `UNVERIFIED_AFTER_RESEARCH`。小役確率から逆算していない。

### v0.7 resetBehavior

- settingChangeBehavior: `UNVERIFIED_AFTER_RESEARCH`。設定変更時にネオストック内部状態/成立済みボーナス状態がどう初期化されるか本機固有資料を確定できず。
- carryOverBehavior: `UNVERIFIED_AFTER_RESEARCH`。据え置き時のネオストック状態/成立済みボーナス状態の引継ぎを直接確認できず。ゲーム数天井は確認されないため天井G引継ぎはNOT_APPLICABLE。
- powerCycleBehavior: `UNVERIFIED_AFTER_RESEARCH`。単純電源OFF→ON時の内部状態、表示、リール初期挙動を直接確定できず。
- gameCounterReset: `NOT_APPLICABLE_TO_PUBLISHED_GAME_NUMBER_CEILING`。
- ceilingAfterReset: `NOT_APPLICABLE / NO_PUBLISHED_GAME_NUMBER_CEILING_CONFIRMED`。リセット短縮天井も確認なし。
- modeAfterReset/stateAfterReset: `UNVERIFIED_AFTER_RESEARCH`。連チャン/通常/ハマリ状態および成立済みボーナス状態の変更時処理は不明。朝一専用モード振分は確認なし。
- advantageousSectionReset: `NOT_APPLICABLE`（5号機・有利区間制度前）。
- resetBenefits: `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetPenalties: `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetDetection: `UNVERIFIED_AFTER_RESEARCH`。ガックン、初期出目、液晶背景等を変更/据え置き判別へ直接結び付ける資料なし。夕方背景移行率は通常の設定判別要素でありresetDetectionへ流用しない。
- numericResetData: リセット専用天井/朝一当選率/恩恵率/専用モード振分は `NONE_CONFIRMED_AFTER_RESEARCH`。

主要出典（取得日 2026-09-02）:
- ALL7 / 2009年4月導入予定一覧 — INDUSTRY_SCHEDULE_DATABASE
  - https://www.all7.jp/plans/index/2009/04
- P-WORLD / シーシー — ANALYSIS_HIGH_DATABASE
  - https://www.p-world.co.jp/machine/database/5495
- パチンコビスタ / シーシー — ANALYSIS_DATABASE
  - https://www.pachinkovista.com/pfactory/model.php?nid=17529&dsp=0
- CrankySeven / シーシー解析攻略 — OLD_ANALYSIS
  - https://crankyseven.com/cc-pc.htm
- A-SLOT / コルモ シーシー — SECONDARY_MACHINE_DATABASE
  - https://www.a-slot.com/SHOP/colmo1.html
- 777パチガブ / コルモ機種一覧 — SECONDARY_DATABASE_CONFLICTING_DATE
  - https://p-gabu.jp/guideworks/machine/maker/COLMO
- コルモ検定通過機種メモ — SECONDARY_APPROVAL_LIST
  - https://q-and-a.hatenablog.com/entry/2016/10/23/105244

commit:
- 356 シーシー: `98a07df0f48dfb6b919f11c20b44a4316820594e`

## 2009年4月 境界監査

- 4/5 `夢花月` 既存354（4/6ホール導入開始資料も保持）。
- 4/6〜4/12は具体日付きで安全に追加できる未処理パチスロを直前監査で確定できず。
- 4/13 `クラシックジャグラー` 既存355、`シーシー` 今回356。
- ALL7の4/13表示に混在する `デビルマン～悪魔聖戦～`、`フィーバー銀牙伝説WEED`、`中村美律子の人生祭りだ!だんじりだ!` はパチンコのため本線へ混入させない。
- 4/14〜4/19を日付指定検索したが、今回新たに安全な未処理パチスロ具体日を確定できなかった。記事投稿日や掲示板投稿日は導入日に代用しない。
- 次の明確な同日群はALL7 **2009-04-20**。候補: `RIO2 クルージング・ヴァナディース / さすがの猿飛 / エースをねらえ! / プリティ戦記 / 国際サラリーマンとおるくん`。
- `スターマンアイズ / ジュードーズ` は具体日が新たに取れた場合のみ正しい時系列位置へ遡及追加する。

## resetBehavior遡及QA進捗

- **竹中直人のパチスロ太閤記（2006-09）** までv0.7化済み。
- 遡及QAは、竹中直人のパチスロ太閤記より後の最初のresetBehavior未補完機から継続する。
- 既存性能値を無駄にやり直さず、既にv0.7化済み機種は飛ばす。

## 次回再開地点

1. **LATEST_HANDOFF基準356件地点。既存356件の再追加禁止。**
2. **2009-04-20同日群へ接続する前に、4/14〜4/19の漏れをメーカー別/当時業界記事/旧DBでもう一段監査**する。
3. 4/14〜4/19に安全な未処理機がなければ、2009-04-20群を時系列同日扱いで処理する。
4. 4/20群の最優先候補は `RIO2 クルージング・ヴァナディース`。次いで `さすがの猿飛 / エースをねらえ! / プリティ戦記 / 国際サラリーマンとおるくん`。毎回既存登録を検索してから追加する。
5. 各新規機で性能コアに加えv0.7 resetBehaviorを同時収集し、設定変更/据え置き/電源OFF→ON/天井短縮/モード/状態/ガックン/有利区間を表記揺れ・型式・メーカー込みで多段検索する。
6. `スターマンアイズ / ジュードーズ` は具体導入/納品日が新たに取れた場合のみ遡及追加。
7. 遡及QAは **竹中直人のパチスロ太閤記より後の最初のresetBehavior未補完機**から再開する。
8. 一般論、後継機、同名別メーカー機の値で推測補完しない。

## コミット

- 354 夢花月: `131ad235224d14cb77b34f8c6e5ae8f69b860640`
- 355 クラシックジャグラー: `bcaad8ff882a0f25a7ae9fa5c2bcb4bad3b10643`
- 356 シーシー: `98a07df0f48dfb6b919f11c20b44a4316820594e`
