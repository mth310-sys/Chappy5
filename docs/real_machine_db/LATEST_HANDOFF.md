# 実機DB 最新リレー引継ぎ

更新日: 2026-09-07

## 現在地点

- recordCount: **833**
- latestRecordAdded: **みどりのマキバオー 届け!!日本一のゴールへ!!**（オリンピア）— 2014-07-22
- latestRecord: `docs/real_machine_db/machines/2014-07-22_midori-no-makibao-todoke-nihonichi-no-goal-e.md`
- chronologicalFrontier: **2014-07-22**
- frontierLatestMachine: **みどりのマキバオー 届け!!日本一のゴールへ!!**
- schema: **resetBehavior v0.7**
- status: **2014-07-22_GROUP_OPEN**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`docs/real_machine_db/LATEST_HANDOFF.md`、832件目 `2014-07-22_pachislot-ring-noroi-no-nanokakan.md` を再読。
- INDEXは19件表記の旧集約状態のため、README規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 作業開始時の正本は **832件 / 2014-07-22 / 07-22_GROUP_OPEN**。次の未処理 **「みどりのマキバオー 届け!!日本一のゴールへ!!」** から継続。

## 今回追加 — みどりのマキバオー 届け!!日本一のゴールへ!!

### identity / 性能コア

- manufacturer: **オリンピア**。
- hall start: **2014-07-22**。
- formalModelName: **みどりのマキバオー2E2**。
- inspectionNumber: **4S0283**。
- generation/system: **5号機 / ART / 疑似ボーナス / CZ / 天井**。
- payoutRate: **96.4 / 97.7 / 100.0 / 104.2 / 108.7 / 113.3%**。
- 疑似ボーナス合算: **1/237.4 / 229.8 / 222.5 / 201.8 / 183.1 / 165.0**。
- ART初当り: **1/545.6 / 527.3 / 507.3 / 456.6 / 408.7 / 364.9**。
- baseGamesPer50: **約30G/50枚**（HAZUSE当時DB）。
- netIncrease: **約2.0枚/G**。
- 疑似ボーナス: ノーマルBIG13種 + スーパーBIG5種の計18種。選択タイプにより5G/30G/50G/100G、初期100枚等へ性能が変わるため単一獲得値へ平均化しない。
- ART「マスタングRUSH」: 初期4G上乗せゾーンから開始、ゲーム数上乗せ+継続抽選+セットストック型、最大継続率85%。
- 天井: **通常時760Gハマリ+前兆で疑似ボーナス当選**。天井以外の規定G解除なし。
- coreStatus: **COMPLETE_CORE**。

## resetBehavior v0.7

- settingChangeBehavior: K-Navi/旧パチマガスロマガに本機専用の設定変更項目が存在することは確認。ただし現存キャッシュでは具体本文を安全に復元できず、天井G・調子メーター・内部状態の処理は **UNVERIFIED_AFTER_RESEARCH**。
- carryOverBehavior: 前日G数を用いた宵越し実戦例はあるが、内部引継ぎを実証する内容ではない。天井G・調子メーター・内部状態は **UNVERIFIED_AFTER_RESEARCH**。
- powerCycleBehavior: 設定変更なし電源OFF→ON時の天井G・調子メーター・内部状態・出目契約は **UNVERIFIED_AFTER_RESEARCH**。
- gameCounterReset: 設定変更 / 据え置き / 純電断とも **UNVERIFIED_AFTER_RESEARCH**。通常天井760G+前兆自体は確認済み。
- ceilingAfterReset: 設定変更専用短縮天井は **NONE_CONFIRMED_AFTER_RESEARCH**。
- modeAfterReset / stateAfterReset: 内部状態・トレセン状態・調子メーターの再抽選/初期化/保持は **UNVERIFIED_AFTER_RESEARCH**。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- resetBenefits / resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetDetection: ユーザー実戦で朝一出目変化をリセット推測に使う例は確認したが解析契約ではないため採用せず。本機固有の高信頼判別は **NONE_CONFIRMED_AFTER_RESEARCH**。
- publicMorningNumbers: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetBehaviorQA: **PARTIAL_AFTER_REQUIRED_RESEARCH**。

## safeguard / 再探索

- `みどりのマキバオー 届け!!日本一のゴールへ!! / マキバオー2 / みどりのマキバオー2E2 / 4S0283 / オリンピア` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 760G / 調子メーター / トレセン状態 / CZ / 出目 / ガックン / 変更判別` を組み合わせて再探索。
- グリーンべると、K-Navi、P-WORLD、HAZUSE、旧パチマガスロマガ、2014年当時天井解析、後年天井DB、当時実戦記事を横断。
- 2010年版「みどりのマキバオー」は別機種として除外。
- K-Navi/旧スロマガの設定変更専用子ページは索引の存在までは確認できるが本文取得が不安定なため、一般5号機仕様から推定せずUNVERIFIED。

## 2014-07-22群

- 直前handoffで同日候補として **パチスロ リング 呪いの7日間 / みどりのマキバオー 届け!!日本一のゴールへ!! / ぱちスロ 必殺仕事人** の3機を確認済み。
- No.832 リング、No.833 マキバオーまで登録済み。
- **ぱちスロ 必殺仕事人（京楽産業.）が未処理**のため **2014-07-22_GROUP_OPEN** を維持。

## 遡及 resetBehavior QA

- 既存QAカーソルは `docs/real_machine_db/machines/2007-02-12_tim-to-iu-na-no-pachislotki.md` のまま維持。
- 新規時系列収集を止めず、別QAリレーで順次補完する。
- 2015-06-08到達時の **吉宗～極～（ヨシムネH2A4 / 3S1093）** 正式量産版処理注意は維持。

## 次回再開地点

1. **recordCount 833 / chronologicalFrontier 2014-07-22 / 07-22_GROUP_OPEN** から開始。
2. 最新mainで README / mission / INDEX / LATEST_HANDOFF / 833件目を再確認。
3. 次の未処理は同日群 **2014-07-22「ぱちスロ 必殺仕事人」（京楽産業.）**。
4. 必殺仕事人の性能コア + resetBehavior v0.7を収集して保存。
5. その後、他メーカー・当時カレンダー・業界資料で07-22群を再監査してCLOSED判定し、次の時系列境界へ進む。
6. 遡及QAは `docs/real_machine_db/machines/2007-02-12_tim-to-iu-na-no-pachislotki.md` から再開。

## 主要出典 — 取得日 2026-09-07

- グリーンべると: `https://web-greenbelt.jp/00006989/`
- K-Navi: `https://p-kn.com/slot/2079/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/7432`
- HAZUSE: `https://hazuse.com/machine/pachislot/4S0283/`
- パチマガスロマガ ART突入フロー: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/116/l.php`
- パチマガスロマガ 機種トップ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/116/olympia_slot_116.php`
- 目指せ月収20万! パチスロ天井解析攻略ブログ: `https://mezase20.com/makibao.html`
- スロパチクエスト: `https://www.slopachi-quest.com/article/makiba-o-kitaiti/`
