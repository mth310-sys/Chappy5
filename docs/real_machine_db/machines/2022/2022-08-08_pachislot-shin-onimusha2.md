# パチスロ 新鬼武者2

recordNo: 1511
machineName: パチスロ 新鬼武者2
manufacturer: エンターライズ（製造元） / ユニバーサルエンターテインメント（総発売元）
formalModel: S新鬼武者2ZC
inspectionCode: UNVERIFIED_AFTER_RESEARCH
releaseDate: 2022-08-08
generation: 6.5号機
systemType: AT / 擬似ボーナス+AT

## payoutRateBySetting
- 設定1: 98.2%
- 設定2: 99.5%
- 設定3: 100.5%
- 設定4: 105.4%
- 設定5: 107.7%
- 設定6: 110.1%

信頼度: HIGH

## initialHitBySetting
### AT「蒼剣RUSH」
- 設定1: 1/405.2
- 設定2: 1/382.4
- 設定3: 1/366.2
- 設定4: 1/301.3
- 設定5: 1/275.6
- 設定6: 1/262.2

信頼度: HIGH

## baseGamesPer50
- 約37G/50枚（設定1目安）

信頼度: HIGH

## netIncrease
- AT「蒼剣RUSH」: 約+2.0枚/G
- 擬似ボーナス: 約+4.0枚/G

信頼度: OFFICIAL/INDUSTRY_HIGH

## basicPayout
- 蒼剣RUSH: 初回40G、継続時30G。ゲーム数上乗せ+セット継続型、最大継続率89%。
- 真蒼剣BONUS: 40G / 約160枚。
- 蒼剣BONUS: 25G / 約100枚。
- 鬼BONUS: 12G / 約48枚。
- BONUSは最大継続率80%。

信頼度: OFFICIAL/INDUSTRY_HIGH

## modeSpecificMinimumData
- CZ「バッサリZONE」: 4G+α、AT期待度33%以上。
- CZ間天井: 通常時333G消化後、前兆を経由してBZ当選。AT非当選後も再度CZ間333Gで発動。
- AT間天井: 通常時1000G消化後、成功確定BZ→AT。
- 通常時はサブ液晶でAT間G数、CZ間G数、CZ回数、直近CZテーブル履歴を確認可能。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_WITH_DIRECT_RESET_NUMBERS
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 設定変更時は有利区間RESET。
- 天井RESET。
- 内部モードRESET / 再抽選。
- 内部状態RESET / 初期状態再抽選。
- CZ（BZ）回数RESET。
- 朝一ステージは堺ステージ。

### carryOverBehavior
- 据え置き時は有利区間・天井・内部モード・内部状態を引き継ぐ。
- 前日までの内部進行をCARRY_OVERする機種別資料を確認。

### powerCycleBehavior
- 純電源OFF→ONでは有利区間・天井・内部モード・内部状態・CZ回数を引き継ぐ。
- サブ液晶の表示情報自体はリセットされるとする機種別解析あり。内部天井までの進行とは分けて扱う。
- 純電源OFF→ON後の開始ステージは資料上「調査中」が残るため、設定変更時と同一とは断定しない。

### gameCounterReset
- 設定変更時: RESET。
- 据え置き/純電源OFF→ON: 内部天井ゲーム数CARRY_OVER。
- 純電断ではサブ液晶表示情報が初期化されるため、見た目のカウンタと内部進行を混同しない。

### ceilingAfterReset
- 設定変更専用の固定短縮天井は確認されず、通常のCZ間333G / AT間1000Gが基準。
- CZ間333G到達: BZ当選。
- AT間1000G到達: 成功確定BZ→AT。

### modeAfterReset
- BZテーブル選択に関わる内部モードは設定変更時に再抽選、据え置き/純電断は引継ぎ。
- 設定変更後およびAT終了後の初回BZはテーブル3以上が確定。
- 通常時の全モード移行テーブルは物差し用途外のため収集しない。

### stateAfterReset
- 設定変更時の初期内部状態は設定差あり。
- 設定1〜3: 通常66.8% / 高確32.8% / 超高確0.4%。
- 設定4: 通常56.6% / 高確43.0% / 超高確0.4%。
- 設定5: 通常52.3% / 高確46.9% / 超高確0.8%。
- 設定6: 通常50.0% / 高確49.2% / 超高確0.8%。
- 高確/超高確は12G保証とする解析あり。
- 据え置き/純電断は内部状態CARRY_OVER。

### advantageousSectionReset
- 設定変更時: RESET。
- 据え置き/純電源OFF→ON: CARRY_OVER。
- 有利区間ランプは通常時非点灯・AT中点灯タイプのため、朝一ランプ単独で変更判別不可。

### resetBenefits
- 設定変更後の初回BZはテーブル3以上確定。
- 初期高確以上の選択率は設定1〜3で33.2%、設定4で43.4%、設定5で47.7%、設定6で50.0%。
- 固定天井短縮ではなく、初回CZテーブルと初期内部状態の優遇が主な朝一差分。

### resetPenalties
- 設定変更固有の主要不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 見た目だけで設定変更の有無を直接判断するのは困難。
- 朝一に契機なく高確示唆ステージ/演出へ移行した場合は設定変更期待度が上がる。
- 設定変更後の初回BZはテーブル3以上確定のため、初回BZでテーブル2以下が確認できれば設定変更否定=据え置き判断材料となる。
- 有利区間ランプ単独判別不可。
- 本機固有のリールガックン条件・発生率は、機種名/型式/メーカー/設定変更/朝一/ガックン等で再探索したが `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData
- 初回BZ（設定変更後/AT終了後）: テーブル3以上確定。
- 設定変更時初期状態:
  - 設定1〜3: 通常66.8% / 高確32.8% / 超高確0.4%
  - 設定4: 56.6% / 43.0% / 0.4%
  - 設定5: 52.3% / 46.9% / 0.8%
  - 設定6: 50.0% / 49.2% / 0.8%
- CZ間天井: 333G。
- AT間天井: 1000G。

### publicMorningNumbers
- 設定変更後初回BZ: テーブル3以上確定。
- 初期高確以上: 設定1〜3 33.2% / 設定4 43.4% / 設定5 47.7% / 設定6 50.0%。
- CZ間333G / AT間1000G。

### resetBehavior 再探索メモ
- 検索語: `パチスロ 新鬼武者2 / 新鬼武者2 / S新鬼武者2ZC / エンターライズ / ユニバーサル / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / モード / 状態 / テーブル / ガックン / 有利区間`。
- メーカー公式、業界記事、パチマガスロマガ、必勝本、なな徹、当時解析/後年整理資料を横断。
- 型式 `S新鬼武者2ZC` は業界一次系・公安委員会検定記事で固定。
- `2Sxxxx`形式の検定番号は検索語を変えて再探索したが直接値を固定できず `UNVERIFIED_AFTER_RESEARCH`。

## sources
取得日: 2026-09-13

1. ユニバーサルエンターテインメント公式 — 発売告知
   - https://www.universal-777.co.jp/news/20220606001539/
   - 2022年8月予定、製造元エンターライズ、総発売元ユニバーサル、ユニバーサル初6.5号機
   - reliability: OFFICIAL
2. 遊技日本 — 8/8新台導入
   - https://yugi-nippon.com/pachinko-new-machine/post-53139/
   - 型式S新鬼武者2ZC、2022-08-08全国導入、CZ構造
   - reliability: INDUSTRY_HIGH
3. Greenbelt — 検定通過
   - https://web-greenbelt.jp/post-59830/
   - 山形県公安委員会2022-05-26付検定通過、型式S新鬼武者2ZC
   - reliability: INDUSTRY_HIGH
4. パチビー — 基本スペック
   - https://www.pachibee.jp/machines/index/222070001
   - 2022-08-08、6.5号機、AT40G、各BONUS獲得性能
   - reliability: ANALYSIS_HIGH
5. SLOT HACK — スペック
   - https://slothack.net/matome/77996/
   - AT確率/出玉率、37G/50枚、純増、初期内部状態
   - reliability: ANALYSIS_HIGH
6. パチマガスロマガ — 朝イチ/設定変更
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/enterrise_slot/25/kr01.php
   - 設定変更: 有利区間/天井/内部モード/内部状態RESET、電源OFF ON: 引継ぎ、堺ステージ、初回BZテーブル3以上
   - reliability: ANALYSIS_HIGH
7. パチ＆スロ必勝本 — 天井&設定変更
   - https://p.hisshobon.jp/machine/3930/1/89332
   - CZ間333G、AT間1000G、設定変更/電断比較、CZ回数/サブ液晶挙動
   - reliability: ANALYSIS_HIGH
8. パチ＆スロ必勝本 — テーブル&モード
   - https://p.hisshobon.jp/machine/3930/1/90727
   - 設定変更後/AT終了後初回BZテーブル3以上
   - reliability: ANALYSIS_HIGH
9. なな徹 — 朝一/設定変更
   - https://nana-press.com/kaiseki/machine/397/10830/
   - 設定変更/据え置き比較、ランプ判別不可、初期高確/BZテーブル優遇
   - reliability: ANALYSIS_HIGH
10. なな徹 — 天井
   - https://nana-press.com/kaiseki/machine/397/10677/
   - CZ間333G、AT間1000G、到達恩恵
   - reliability: ANALYSIS_HIGH
11. スロットセブン — 設定差/初期状態
   - https://slot-seven.com/so2-settei/
   - 設定変更時初期状態振り分け
   - reliability: ANALYSIS_HIGH

## missingFields
- `2Sxxxx`形式の検定番号
- 本機固有のリールガックン条件/発生率
- 純電源OFF→ON後の開始ステージ（内部契約は引継ぎを固定、表示ステージは未固定）

## conflicts
- 重大な性能数値CONFLICTなし。
- サブ液晶表示は純電断でリセットされる一方、内部天井G数は引継ぐため、表示初期化と内部進行を別フィールドとして保持。

coreStatus: COMPLETE_CORE
resetBehaviorQA: COMPLETE_WITH_DIRECT_RESET_NUMBERS
confidence: OFFICIAL_HIGH_CORE / HIGH_RESET
