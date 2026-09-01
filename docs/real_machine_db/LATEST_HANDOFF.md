# 実機DB 最新リレー引継ぎ

更新日: 2026-09-02

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前正本は **312 `クラッピーパーク`（ビーム / 2008-11-16）**。
- 2008-11-17〜23境界を再監査。サミー `ぱちスロST行け!稲中卓球部` は当時K-Naviで12月上旬導入予定、ALL7では2008-12-08。`ぱちスロSTゴジラ` もALL7で2008-12-08。`HAIBいちろう` はALL7で2008-12-15。発表日や月別一覧を11月実導入と誤認しない。
- 今回の検索範囲では、312より後かつ11月23日以前に具体導入/納品日を確定できる未収録5号機を新たに確定できなかった。
- **313 `鬼火`（ニューギン / 型式 オニビ）** を追加。
- 当時グリーンべるとで **2008-11-24納品予定** を確認。性能コア + v0.7 `resetBehavior` を同時収集。
- 通常救済はボーナス間**777GでRT**。後年天井狙い資料には `宵越し○` 記録があるためカウンタ引継ぎ報告として保持するが、設定変更/据え置き/単純電断の条件分離を当時一次解析で確定できず、設定変更時挙動は `UNVERIFIED_AFTER_RESEARCH` のまま。

## 313. 鬼火

- record: `docs/real_machine_db/machines/2008-11-24_onibi.md`
- manufacturer: ニューギン
- modelNumber: `オニビ`
- inspectionNumber: `8S0602`
- releaseDate: **2008-11-24（当時業界記事の納品予定）**
- generation: 5号機
- systemType: ノーマル + 完全告知 + 天井救済RT。
- BIG: **1/321.25 / 1/303.41 / 1/289.98 / 1/278.88 / 1/268.59 / 1/260.06**。
- REG: **1/394.80 / 1/372.36 / 1/343.12 / 1/315.08 / 1/291.27 / 1/273.07**。
- 合算: **1/177.12 / 1/167.18 / 1/157.16 / 1/147.94 / 1/139.74 / 1/133.20**。
- 50枚ベース: **約37G/50枚**（当時記事「1000円あたり約37G」）。
- BIG約**312枚**、REG約**104枚**。規定は345枚/105枚超払い出しで終了。
- 通常天井: **ボーナス間777Gで救済RT**。
- 天井RT純増/Gは十分再探索後も直接値を確定できず `UNVERIFIED_AFTER_RESEARCH`。
- `coreStatus: COMPLETE_CORE`。

### 機械割CONFLICT（313）

- パチマガスロマガのシミュレート値: **96.57 / 99.06 / 101.56 / 104.02 / 106.53 / 109.18%**。
- 2008年当時グリーンべると: **設定1 96.7%〜設定6 110.2%**。
- 設定6が明確に異なるため平均化せず `CONFLICT`。算出条件差を推測補完しない。

### resetBehavior（313）

- `settingChangeBehavior`: `UNVERIFIED_AFTER_RESEARCH`。設定変更時の777G天井カウンタ/救済RT状態を本機固有の当時本文で確定できず。
- `carryOverBehavior`: `REPORTED_CARRYOVER_RETROSPECTIVE_SINGLE_SOURCE`。後年天井資料で鬼火は `宵越し○`。前日ゲーム数を利用できる報告として保持するが、条件詳細は未分離。
- `powerCycleBehavior`: `UNVERIFIED_AFTER_RESEARCH`。電源OFF→ONのみでの777Gカウンタ/RT状態/初期表示は未確定。
- `gameCounterReset`: `REPORTED_NOT_RESET_OR_CARRYOVER_RETROSPECTIVE_SINGLE_SOURCE`。宵越し○報告あり。ただし設定変更でも確実に引継ぐとは断定しない。
- `ceilingAfterReset`: `NONE_CONFIRMED_AFTER_RESEARCH`。設定変更専用短縮天井/朝一固定G数なし。
- `modeAfterReset`: `NONE_CONFIRMED_AFTER_RESEARCH`。朝一専用モード/リセット時モード振り分けなし。
- `stateAfterReset`: `UNVERIFIED_AFTER_RESEARCH`。救済RT中の設定変更/電断処理未確定。
- `advantageousSectionReset`: `NOT_APPLICABLE`（5号機・有利区間制度前）。
- `resetBenefits`: `REPORTED_POTENTIAL_CEILING_CARRYOVER`。宵越し○が示す前日ハマリ活用。ただし設定変更条件は未確定。
- `resetPenalties`: `NONE_CONFIRMED_AFTER_RESEARCH`。
- `resetDetection`: `UNVERIFIED_AFTER_RESEARCH`。ガックン/初期出目/据え置き判別を再探索したが本機固有確定手段なし。
- `numericResetData`: 通常救済 **777G**。リセット固有数値は `NONE_CONFIRMED_AFTER_RESEARCH`。

## 313主要出典

取得日: 2026-09-02

- https://web-greenbelt.jp/00003879/ — 2008-11-24納品予定、777G救済RT、BIG/REG/合算丸め値、出玉率96.7〜110.2%、1000円約37G。
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newgin_slot/08/h.php — BIG/REG/合算設定別精密値、PAYOUTシミュレート96.57〜109.18%。
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newgin_slot/08/a.php — 完全告知/天井RT、BIG約312枚、REG約104枚、規定払い出し。
- https://www.p-world.co.jp/machine/database/5339 — ニューギン、型式オニビ、検定8S0602、2008年11月、BIG/REG規定払い出し。
- https://hazuse.com/machine/pachislot/8S0602/ — 型式/検定番号/設定別ボーナス確率補助照合。純増は同資料でも調査中。
- https://p-mans.blogspot.com/2008/10/ — Playgraph転載。2008-10-02内覧会、完全告知、777G救済RTの第二照合。
- https://macerate.seesaa.net/article/226189461.html — 鬼火「宵越し○」の後年記録。カウンタ引継ぎ報告の単一回顧根拠としてのみ採用。

## 境界監査・重複防止

- **既存313件の再追加禁止。**
- `ぱちスロSTゴジラ` / `ぱちスロST行け!稲中卓球部` は2008-11-17発表記事があるが、実導入は12月キューとして扱う。ALL7は両機2008-12-08。
- `HAIBいちろう` は月別回顧一覧に2008年11月掲載がある資料も存在するが、ALL7具体導入予定は2008-12-15。具体日を優先し12月へ送る。
- `星羅はお告げがお好き` / `キャプテンシャーク` / `回胴合体ゴーケンオーV` は当時グリーンべるとで2008-11-03納品予定が取れるため、今後11月境界QAで既存登録有無を再点検する。現在地点より前への漏れが確定した場合は遡及追加し、時系列を注記する。
- `海遊記` はベルコ公式で2008年11月登場まで確認。具体納品/導入日は未確定のため、日付を推測せず11月キュー監査継続。

## 次回再開地点

1. **LATEST_HANDOFF基準313件地点。2008-11-24同日候補 `サイサイ`（北電子）を次に処理する。** 当時グリーンべるとで納品11月24日開始が確定済み。
2. 同日またはそれ以前に具体日が取れる `海遊記` / `パンダーゼット` / `モンキーモンキー` / `ハネスロナイツ` / `バックトゥザフューチャーデラックス` 等の実導入日を比較し、11月24日以前なら遡及優先。
3. `サイサイ` ではBIG後100G RT、平均BIG約309枚、CB約188枚までは当時一次記事で確認済み。設定別確率・機械割・50枚ベース・RT純増、v0.7 resetBehaviorを再探索する。
4. `鬼火` の宵越し○は単一回顧資料止まり。将来当時攻略アーカイブで設定変更/据え置き/電断条件が取れた場合はQAで信頼度を引き上げる。
5. resetBehavior遡及QAは2006-09群を継続し、`大山鳴動 漢みちスロ！` → `竹中直人のパチスロ太閤記` の順に欠損再探索する。
