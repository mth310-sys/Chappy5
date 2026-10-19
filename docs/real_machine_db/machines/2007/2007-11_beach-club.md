# ビーチクラブ

machineName: ビーチクラブ
manufacturer: ビスティ
generation: 5号機
releaseDate: CONFLICT (2007-11 / 2007-09上旬)
systemType: ボーナス + CZ + RT / 完全告知
coreStatus: PARTIAL
resetBehaviorQA: PARTIAL

## release / identity

- SANKYOオンライン博物館は導入年月を `2007.11`、販売名を `ビーチクラブ`、型式名を `ビーチクラブS` と掲載。
- 当時HAZUSEも `ビーチクラブS [Bisty] 5号機 <2007年11月>` と掲載。
- 一方、当時のパチスロ機種史サイト「パチスロ業界初まとめ」は2007-09-25更新時点で `ビーチクラブS [ビスティ] ※2007/9/上発売` と記録。
- 月差が大きく単純な誤差ではないため、発売/導入の定義差または資料差として releaseDate は `CONFLICT`。推測で日付を一本化しない。

信頼度: CONFLICT

## payoutRateBySetting

### 解析セブン / HAZUSE系

| 設定 | 機械割 |
|---|---:|
| 1 | 95.8% |
| 2 | 98.3% |
| 3 | 100.7% |
| 4 | 103.8% |
| 5 | 107.6% |
| 6 | 111.1% |

### 5号機クロニクル

| 設定 | 機械割 |
|---|---:|
| 1 | 94.7% |
| 2 | 97.7% |
| 3 | 100.9% |
| 4 | 103.9% |
| 5 | 108.5% |
| 6 | 112.5% |

設定1・2・5・6で差が大きく、平均せず `CONFLICT` として双方保持。

信頼度: CONFLICT

## initialHitBySetting

解析セブン / HAZUSEでほぼ一致。

| 設定 | BIG合成 | CB | ボーナス合成 |
|---|---:|---:|---:|
| 1 | 1/327.6 | 1/458.2 | 1/191.0 |
| 2 | 1/307.6 | 1/451.9 | 1/183.0 |
| 3 | 1/297.8 | 1/402.0 | 1/171.1 |
| 4 | 1/284.9 | 1/352.3 | 1/157.5 |
| 5 | 1/267.4 | 1/310.6 | 1/143.7 |
| 6 | 1/251.1 | 1/289.9 | 1/134.5 |

信頼度: ANALYSIS_HIGH

## baseGamesPer50

- `UNVERIFIED_AFTER_RESEARCH`。
- `ビーチクラブ / ビーチクラブS / ビスティ / 50枚 / 1000円 / ベース / コイン持ち / 千円ゲーム数` を組み替え、メーカー公式、当時解析、旧DB、回顧資料を横断したが比較可能な直接値を確定できず。

## netIncrease

- 7Gのチャンスタイム中に特殊リプレイ入賞で77G RT「ビーチチャンス」へ突入。
- 解析セブンではRT純増 `約+0.1枚/G`。
- SANKYO公式オンライン博物館は77G RTと終了条件（77G消化またはボーナス成立）を確認できるが、純増/Gは掲載していない。

信頼度: ANALYSIS_HIGH（77G/構造） / ANALYSIS_SINGLE（約+0.1枚/G）

## basicPayout

- BIG: 345枚超の払い出しで終了、純増約307枚。
- CB: 105枚超の払い出しで終了、純増約104枚。
- HAZUSEはCBを「120枚を超える払い出しで終了」とする記載があり、終了条件の表記に競合があるため定義差として保持する。

信頼度: ANALYSIS_HIGH / CONFLICT_DETAIL

## modeSpecificMinimumData

- 完全告知。
- 全ボーナス後に7GのRT高確率ゾーン/チャンスタイム。
- チャンスタイム中の特殊リプレイ入賞で77G RT「ビーチチャンス」。
- RTは77G消化またはボーナス成立で終了。
- 通常時ゲーム数天井を示す高信頼資料は確認できず。

## resetBehavior

### settingChangeBehavior

- 設定変更時に7Gチャンスタイム開始、RT開始、特定状態再抽選となる本機固有の直接資料は、`設定変更 / リセット / 朝一 / ビーチクラブS / ビスティ` を組み替えて再探索したが確定できず `UNVERIFIED_AFTER_RESEARCH`。

### carryOverBehavior

- 据え置き時のCZ/RT残G・内部状態引継ぎは `UNVERIFIED_AFTER_RESEARCH`。

### powerCycleBehavior

- 電源OFF→ONのみ時のCZ/RT残G・内部状態引継ぎは `UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset

- 通常時ゲーム数天井そのものを確認できず、天井カウンタの設定変更時リセット/引継ぎ対象は `NONE_CONFIRMED`。

### ceilingAfterReset

- リセット時短縮天井、変更後専用天井は `NONE_CONFIRMED`。

### modeAfterReset

- 朝一専用モード、設定変更時モード再抽選、公開モード振り分けは `NONE_CONFIRMED`。

### stateAfterReset

- 設定変更時の7Gチャンスタイム/77G RT状態処理は `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset

- `NOT_APPLICABLE`（5号機初期、有利区間制度前）。

### resetBenefits

- 設定変更/朝一固有の公開恩恵は `NONE_CONFIRMED`。

### resetPenalties

- 設定変更/朝一固有の公開不利要素は `NONE_CONFIRMED`。

### resetDetection

- 本機固有のガックン、初期出目、告知ランプ/液晶等による設定変更・据え置き判別は、検索語を変えても直接資料を確定できず `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData

- 公開された設定変更時専用数値は今回確認できず。

## sources

取得日: 2026-09-01

1. SANKYOオンライン博物館 — ビーチクラブ
   - https://www.sankyo-fever.jp/collection/867/
   - 導入年月2007.11、ブランドBisty、型式ビーチクラブS、全ボーナス後7Gチャンスタイム→特殊リプレイで77G RT、RT終了条件。
   - reliability: OFFICIAL
2. 解析セブン — ビーチクラブ
   - https://crankyseven.com/sp/beachclub-pc.htm
   - 設定別BIG/CB/合成、機械割、BIG約307枚、CB約104枚、7G CZ、77G RT、RT純増約+0.1枚/G。
   - reliability: ANALYSIS_HIGH
3. HAZUSE — ビーチクラブS
   - https://hazuse.com/i/data/biichi/top.htm
   - 2007年11月、設定別ボーナス確率、機械割、BIG平均純増307枚、CB平均104枚、7G高確率ゾーン→77G RT。
   - reliability: ANALYSIS_HIGH
4. 5号機クロニクル — ビスティ全機種
   - https://5goki.com/bisty
   - 導入2007/11、別系統機械割94.7〜112.5%。
   - reliability: ANALYSIS_SINGLE
5. パチスロ業界初まとめ — 更新情報4
   - https://slothistory.com/kousin_kako04.html
   - 2007-09-25更新時点で「ビーチクラブS」「2007/9/上発売」と記録。
   - reliability: ANALYSIS_SINGLE / PERIOD_RECORD
6. パチマガスロマガ — ビーチクラブ基本システム
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/bisty_slot/12/a.php
   - 完全告知/同時成立/CZ/RT、BIG規定払い出し346枚・純増約307枚、CB106枚・純増約104枚。
   - reliability: ANALYSIS_HIGH

## missingFields

- 50枚あたりゲーム数/ベース
- 設定変更時のCZ/RT状態処理
- 据え置き時のCZ/RT残G・内部状態引継ぎ
- 電源OFF→ON時のCZ/RT残G・内部状態引継ぎ
- 本機固有の変更判別要素
- 具体的なホール導入日

## conflicts

- 導入/発売時期: SANKYO公式・HAZUSE・5号機クロニクルは2007-11、当時機種史資料は2007-09上旬発売。平均・推定せず双方保持。
- 設定別機械割: 解析セブン/HAZUSE `95.8/98.3/100.7/103.8/107.6/111.1%` と5号機クロニクル `94.7/97.7/100.9/103.9/108.5/112.5%` が競合。
- CB終了条件: パチマガ系/解析セブンは105〜106枚超の払い出し、HAZUSEは120枚超表記。純増約104枚は一致するため終了条件のみCONFLICT_DETAIL。
