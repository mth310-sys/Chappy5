# 実機DB 最新リレー引継ぎ

更新日: 2026-09-07

## 現在地点

- recordCount: **831**
- latestRecordAdded: **娘娘娘**（岡崎産業）— 2014-07-07
- latestRecord: `docs/real_machine_db/machines/2014-07-07_nyannyan-musume.md`
- chronologicalFrontier: **2014-07-07**
- frontierLatestMachine: **娘娘娘**
- schema: **resetBehavior v0.7**
- status: **2014-07-07_GROUP_CLOSED / 2014-07-08_TO_2014-07-21_BOUNDARY_CLOSED_FOR_CURRENT_RESEARCH**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、本handoff、830件目 `2014-07-07_pachislot-cyborg009.md` を再読。
- INDEXは19件表記の旧集約状態のため、README規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 作業開始時の正本は、チャット直前の826件ではなく **830件 / 2014-07-07 / 07-07_GROUP_OPEN**。指定どおり次の未処理「娘娘娘」から継続。

## 今回追加 — 娘娘娘

### identity / 性能コア

- machineName: **娘娘娘（にゃんにゃんむすめ）**。
- manufacturer: **岡崎産業**。
- hall start: **2014-07-07**。グリーンべるとは7/6納品開始予定、当時攻略は7/7導入日としているため、ホール導入開始キーは7/7。
- formalModelName: **ニャンニャンムスメN1**。
- inspectionNumber: **4S0172**。
- generation/system: **5号機 / AT / 疑似ボーナス / CZ / ゲーム数解除 / 天井**。
- payoutRate: **96.87 / 98.35 / 100.57 / 103.10 / 105.60 / 110.03%**（メーカー発表系列）。
- 疑似ボーナス合成: **1/108.5 / 103.7 / 96.5 / 89.3 / 82.7 / 72.3**（メーカー発表値）。これは分離されたAT初当たりではなく疑似ボーナス合成として保持。
- baseGamesPer50: **30.64G**。
- netIncrease: **約2.8枚/G**。
- 桃花ボーナス: ベルナビ20回・約100枚。
- 桜花ボーナス: ベルナビ40回・約200枚。
- 娘娘ボーナス: ベルナビ60〜222回・約300〜1110枚。
- CZ「娘娘時間」: 5G・期待度約30%。「超娘娘時間」: 10G・期待度約51%。
- 通常最大天井: **999G**。
- coreStatus: **COMPLETE_CORE**。

## 娘娘娘 — resetBehavior v0.7

- settingChangeBehavior: 当時解析で**設定変更後専用のモード振り分け**を確認。公開値として **モードC 28.13% / モードD 28.13%**。また設定変更後は **約35%で128G以内にゲーム数解除**。
- gameCounterReset: 設定変更後の専用モード抽選は確認できたが、前日内部G数/天井Gを明示的にRESETとした独立表は今回固定できず **UNVERIFIED_AFTER_RESEARCH**。推測転記しない。
- ceilingAfterReset: 設定変更専用の固定短縮天井は **NONE_CONFIRMED_AFTER_RESEARCH**。約35%で128G以内解除は専用モード配分由来の朝一優遇として分離。
- modeAfterReset: **RESET/RESELECT_CONFIRMED**。モードC **28.13%**、モードD **28.13%**。残り43.74%のA/B内訳は安全な直接資料を固定できずUNVERIFIED。
- stateAfterReset: モード以外のCZ高確等の内部状態処理は **UNVERIFIED_AFTER_RESEARCH**。
- carryOverBehavior: 純据え置き時の内部G数・モード・状態の直接契約は **UNVERIFIED_AFTER_RESEARCH**。
- powerCycleBehavior: 設定変更なし電源OFF→ONの内部G数・モード・状態の直接契約は **UNVERIFIED_AFTER_RESEARCH**。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- resetBenefits: 設定変更後約35%で128G以内解除。モードDは128G以内解除確定の天国系。リセット後は朝一狙いに実用的な優遇あり。
- resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetDetection: ガックン、7セグ初期表示等の本機固有で高信頼な変更判別契約は **NONE_CONFIRMED_AFTER_RESEARCH**。128G以内当選だけで変更確定とは扱わない。
- publicMorningNumbers: **約35%で128G以内解除 / モードC 28.13% / モードD 28.13%**。
- resetBehaviorQA: **PARTIAL**。

## safeguard / 再探索

- `娘娘娘 / にゃんにゃんむすめ / ニャンニャンムスメN1 / 4S0172 / 岡崎産業` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 999G / 128G / モード / モードC / モードD / ガックン / 変更判別 / 50枚 / 1000円` を組み合わせて再探索。
- 岡崎産業関連開発資料、グリーンべると、P-WORLD、パチマガスロマガ旧攻略、当時天井解析、旧実機DBを横断。
- 同名の飲食店等のノイズと後年別機種を除外。
- 純据え置き/単純電断/前日内部G数処理は一般5号機仕様や他機種から流用していない。

## 2014-07-07群 / 境界監査

- K-Naviの全国一斉導入カレンダー上、07-07パチスロ群は **まじかる☆タルるートくん / 鉄拳3rd / パチスロ サイボーグ009 / 娘娘娘** の4機。
- No.828〜831ですべて登録済みとなったため **2014-07-07_GROUP_CLOSED**。
- K-Navi上、次の全国一斉導入パチスロ日は **2014-07-22**。07-08〜07-21の間に同カレンダー上の全国一斉導入パチスロ日はないため、現在の境界監査では **CLOSED_FOR_CURRENT_RESEARCH**。
- 2014-07-22群は **パチスロ リング 呪いの7日間（藤商事） / みどりのマキバオー 届け!!日本一のゴールへ!!（オリンピア） / ぱちスロ 必殺仕事人（京楽産業.）** の3機を確認。

## 遡及 resetBehavior QA

- 既存QAカーソルは `docs/real_machine_db/machines/2007-02-12_tim-to-iu-na-no-pachislotki.md` のまま維持。
- 新規時系列収集を止めず、別QAリレーで順次補完する。
- 2015-06-08到達時の **吉宗～極～（ヨシムネH2A4 / 3S1093）** 正式量産版処理注意は維持。

## 次回再開地点

1. **recordCount 831 / chronologicalFrontier 2014-07-07 / 07-07_GROUP_CLOSED** から開始。
2. 最新mainで README / mission / INDEX / LATEST_HANDOFF / 831件目を再確認。
3. 07-08〜07-21境界は現在CLOSED。最初の未処理は **2014-07-22「パチスロ リング 呪いの7日間」（藤商事）**。
4. 続いて同日群 **みどりのマキバオー 届け!!日本一のゴールへ!! → ぱちスロ 必殺仕事人** を処理し、他メーカー/資料系統で07-22群を再監査してCLOSED判定する。
5. 遡及QAは `docs/real_machine_db/machines/2007-02-12_tim-to-iu-na-no-pachislotki.md` から再開。

## 主要出典 — 取得日 2026-09-07

### 娘娘娘
- グリーンべると: `https://web-greenbelt.jp/00006990/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/7437`
- パチマガスロマガ ボーナス確率/PAYOUT: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/okazaki_slot/72/h.php`
- パチマガスロマガ 小役確率/1000円G数: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/okazaki_slot/72/c.php`
- パチマガスロマガ 機種トップ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/okazaki_slot/72/okazaki_slot_72.php`
- すろぱちくえすと 設定変更恩恵/天井: `https://www.slopachi-quest.com/article/nyannyanmusume/`
- 娯楽産業: `https://www.goraku-sangyo.com/%E5%B2%A1%E5%B4%8E%E7%94%A3%E6%A5%AD%E3%80%80%E6%96%B0%E6%A9%9F%E7%A8%AE%E3%80%8C%E5%A8%98%E5%A8%98%E5%A8%98%E3%83%8B%E3%83%A3%E3%83%B3%E3%83%8B%E3%83%A3%E3%83%B3%E3%83%A0%E3%82%B9%E3%83%A1%E3%80%8D/`
- D-O: `https://www.d-o-inc.co.jp/2014/07/nyannyan_slot.html`

### 境界監査
- K-Navi 2014年7月新台カレンダー: `https://p-kn.com/calendar/201407/`
