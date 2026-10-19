# ウイニングレッド

machineName: ウイニングレッド
manufacturer: JPS
releaseDate: 2006-04
generation: 5号機初期
systemType: ノーマル / 完全告知 / BIG+CT / 25φ
coreStatus: COMPLETE_CORE
resetBehaviorQA: PARTIAL

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 97.5% |
| 2 | 99.0% |
| 3 | 100.0% |
| 4 | 101.5% |
| 5 | 103.0% |
| 6 | 106.5% |

信頼度: ANALYSIS_HIGH

## initialHitBySetting

| 設定 | BIG | CT | 合算 |
|---|---:|---:|---:|
| 1 | 1/311.0〜1/312.1 | 1/528.5 | 約1/196.2 |
| 2 | 1/304.8 | 1/492.8 | 約1/188.3 |
| 3 | 1/304.8 | 1/448.9 | 約1/181.5 |
| 4 | 1/297.8〜1/297.9 | 1/431.2 | 約1/176.2 |
| 5 | 1/287.4 | 1/431.2 | 約1/172.5 |
| 6 | 1/273.1 | 1/409.6 | 約1/163.8 |

P-WORLDとHAZUSEでほぼ一致。設定1・4のBIGは丸め差。
信頼度: ANALYSIS_HIGH

## baseGamesPer50

1000円あたり平均43.5G。
信頼度: ANALYSIS_SINGLE

## netIncrease

該当なし。

## basicPayout

- BIG: 345枚超払い出しで終了、純増約288枚
- CT（Baby）: 165枚超払い出しで終了、純増約144枚

信頼度: ANALYSIS_HIGH

## modeSpecificMinimumData

- 25φ版。JPS機種DBでは「ウイニングレッド」と「ウイニングレッド30」を別機種として掲載。
- 25φは複数の告知タイミングを持つ。30φは先告知のみ。
- 小役との同時当選あり。

## resetBehavior

settingChangeBehavior: UNVERIFIED。本機固有の設定変更時の成立済みボーナス/内部状態処理を確定できず。
carryOverBehavior: UNVERIFIED。据え置き時の本機固有挙動を確定できず。
powerCycleBehavior: UNVERIFIED。電源OFF→ONのみの場合の本機固有挙動を確定できず。
gameCounterReset: NOT_APPLICABLE / NONE_CONFIRMED。通常時ゲーム数天井・RTゲーム数は確認されない。
ceilingAfterReset: NONE_CONFIRMED。リセット短縮天井の公開情報なし。
modeAfterReset: NONE_CONFIRMED。朝一/設定変更専用モードの公開情報なし。
stateAfterReset: NONE_CONFIRMED。RT/ART/CZのような比較対象状態を搭載しない。
advantageousSectionReset: NOT_APPLICABLE。
resetBenefits: NONE_CONFIRMED。公開された朝一専用恩恵なし。
resetPenalties: NONE_CONFIRMED。公開された設定変更時専用不利要素なし。
resetDetection: UNVERIFIED。ガックンや初期出目等を用いた本機固有の変更判別を確定できず。
numericResetData: NONE_CONFIRMED。公開朝一数値なし。

### resetBehavior QA note

`ウイニングレッド / ソヨカゼ / JPS / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / 天井` を組み替え、当時解析・旧DB・業界記事・回顧資料を再探索。後継機ホークIIIには明確な設定変更後無限RTがあるが、それを本機へ流用しない。本機固有のリセット恩恵・天井・RTは確認できないため、コアのCOMPLETE_COREを維持しresetBehavior QAのみPARTIALとする。

## sources

取得日: 2026-09-01

1. P-WORLD — ウイニングレッド
   - https://www.p-world.co.jp/machine/database/4158
   - 2006年4月導入、設定別BIG/CT、出玉率、型式名ソヨカゼ
   - reliability: INDUSTRY
2. HAZUSE — ウイニングレッド解析
   - https://www.hazuse.com/i/det2/winningred/top.htm
   - 設定別BIG/CT/合算、機械割、1000円43.5G、BIG/CT獲得性能、25φ/30φ告知差
   - reliability: ANALYSIS_HIGH
3. パチマガスロマガ — ウイニングレッド
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/jps_slot/02/a.php
   - BIG約288枚、CT約144枚、25φ/30φの告知差
   - reliability: ANALYSIS_HIGH
4. パチマガスロマガ JPS機種DB
   - https://psmaga.com/database/maker.php?id=85&mode=2
   - ウイニングレッドとウイニングレッド30を別機種として掲載
   - reliability: ANALYSIS_HIGH
5. P-WORLD業界ニュース — ホークIII発表（比較用）
   - https://news.p-world.co.jp/articles/1856/greenbelt
   - 後継ホークIIIには設定変更後無限RTを明記。ウイニングレッドの告知モード踏襲も明記
   - reliability: INDUSTRY

## missingFields

- 設定変更/据え置き/電源OFF→ONの本機固有挙動
- 本機固有の変更判別挙動

## conflicts

- BIG確率の設定1はP-WORLD 1/311.0、HAZUSE 1/312.1。設定4は1/297.8 / 1/297.9。丸め・表記精度差として双方を保持。
