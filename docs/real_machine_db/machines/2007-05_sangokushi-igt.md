# 三國志

status: COMPLETE_CORE
qaResetBehavior: PARTIAL

machineName: 三國志
aliases:
- パチスロ三國志（2007年 IGT版）
manufacturer: IGTジャパン
releaseDate: 2007-05（5号機クロニクル、HAZUSE、後年資料で一致。2007-03-14発表展示会、2007-05-01公式サイト公開を確認。日単位の実納品/全国ホール導入日は今回未確定）
generation: 5号機初期
systemType: ボーナス+完走型RT / チャンスゾーン

## 性能コア

payoutRateBySetting:
- パチマガスロマガ シミュレート値
  - 設定1: 97.73%
  - 設定2: 99.85%
  - 設定3: 101.96%
  - 設定4: 104.04%
  - 設定5: 106.13%
  - 設定6: 108.49%
- 5号機クロニクル
  - 設定1: 97.8%
  - 設定2: 99.3%
  - 設定3: 101.3%
  - 設定4: 104.8%
  - 設定5: 106.9%
  - 設定6: 110.4%

confidence: CONFLICT

note:
- 設定別ボーナス確率は両資料で一致する一方、機械割は設定2〜6で差がある。定義/シミュレーション条件差の可能性があるため平均化しない。

initialHitBySetting:
- 赤7BIG
  - 設定1: 1/682.67
  - 設定2: 1/655.36
  - 設定3: 1/630.15
  - 設定4: 1/606.81
  - 設定5: 1/585.14
  - 設定6: 1/564.97
- 緑7BIG
  - 設定1: 1/682.67
  - 設定2: 1/655.36
  - 設定3: 1/630.15
  - 設定4: 1/606.81
  - 設定5: 1/585.14
  - 設定6: 1/564.97
- REG
  - 設定1: 1/682.67
  - 設定2: 1/655.36
  - 設定3: 1/630.15
  - 設定4: 1/606.81
  - 設定5: 1/585.14
  - 設定6: 1/564.97
- ボーナス合算
  - 設定1: 1/227.56
  - 設定2: 1/218.45
  - 設定3: 1/210.05
  - 設定4: 1/202.27
  - 設定5: 1/195.05
  - 設定6: 1/188.32

confidence: ANALYSIS_HIGH

baseGamesPer50:
- 完璧手順時1000円あたりプレイ数
  - 設定1: 39.97G
  - 設定2: 40.70G
  - 設定3: 41.48G
  - 設定4: 42.25G
  - 設定5: 43.07G
  - 設定6: 44.31G
- パチマガスロマガは毎ゲームチェリー下段ビタ押しを前提と明記。通常市場手順と混同しない。

confidence: ANALYSIS_HIGH

netIncrease:
- 完走型RT「決戦ラッシュ」: 50G
- RT純増（パチマガスロマガ）
  - 設定1: +0.69枚/G
  - 設定2: +0.71枚/G
  - 設定3: +0.72枚/G
  - 設定4: +0.73枚/G
  - 設定5: +0.74枚/G
  - 設定6: +0.76枚/G
- P-WORLD / HAZUSE: 約+0.7枚/G、50G完走時約35枚増加

confidence: ANALYSIS_HIGH

basicPayout:
- 赤7BIG: 400枚超払い出しで終了 / 純増約315枚
- 緑7BIG: 260枚超払い出しで終了 / 純増約206枚
- REG: 100枚超払い出しで終了 / 純増約83〜86枚

confidence: ANALYSIS_HIGH

modeSpecificMinimumData:
- ボーナス後・RT終了後はチャンスゾーンへ移行。
- チャンスゾーン中に特殊リプレイより先にチェリーを引くと50G RT「決戦ラッシュ」へ突入。
- チェリー合成と特殊リプレイがともに約1/32で、RTループ期待度は約50%（設定差なし）。
- 通常時777G消化後にもチャンスゾーンへ移行する救済機能あり。液晶上は通常時と同様で見抜きにくい。
- 有利区間制度導入前。

## resetBehavior

resetBehaviorQA: PARTIAL

settingChangeBehavior:
- 設定変更後はチャンスゾーンから開始することをP-WORLDおよび当時HAZUSEで確認。
- 通常画面のまま内部的にチャンスゾーンへ滞在するため、朝一チェリーからRTへ突入した場合は設定変更濃厚とされる。

carryOverBehavior:
- 据え置き時に前日の通常時777G救済カウンタ、CZ/RT残状態がどのように引き継がれるかを本機固有の高信頼資料で確認できずUNVERIFIED。

powerCycleBehavior:
- 設定を変更せず電源OFF→ONのみ行った場合に、777Gカウンタ/CZ/RT状態を維持するか、本機固有資料で確認できずUNVERIFIED。

gameCounterReset:
- 設定変更後は即チャンスゾーン開始が確認できる。
- 通常時777Gで再度チャンスゾーンへ入る救済カウンタが存在するが、変更時に内部カウンタが0へ明示的にリセットされるとの一次記述は今回確認できず、推測しない。

ceilingAfterReset:
- 通常時の救済到達点は777Gでチャンスゾーン移行。
- 設定変更直後は777Gを待たずチャンスゾーン滞在となるため、朝一の実質的な恩恵は即CZ開始。
- 「リセット後天井が○Gへ短縮」という別の公開数値はNONE_CONFIRMED。

modeAfterReset:
- モード管理型ではなく、設定変更後はチャンスゾーン開始を確認。
- 朝一専用モード振り分けはNONE_CONFIRMED。

stateAfterReset:
- 設定変更後: チャンスゾーン。
- 設定変更時に成立済みボーナス、RT途中状態等がどう処理されるかはUNVERIFIED。

advantageousSectionReset:
- NOT_APPLICABLE（5号機初期・有利区間制度導入前）。

resetBenefits:
- 設定変更後は内部チャンスゾーンスタート。
- 朝一チェリー成立時に、特殊リプレイでCZ終了する前であればRT突入チャンスを得る。

resetPenalties:
- 公開された設定変更固有の不利要素はNONE_CONFIRMED。

resetDetection:
- P-WORLD: 設定変更後は通常画面でも内部CZ。朝一チェリーからRTへ突入すれば設定変更濃厚。
- HAZUSEも設定変更後をCZ突入契機として記載。
- ガックン等のリール始動挙動による判別は高信頼資料を確認できずUNVERIFIED。

numericResetData:
- 設定変更後CZ: CONFIRMED
- CZ平均滞在: 約16G（HAZUSE）
- CZからRTへの期待度: 約50%、設定差なし（HAZUSE / パチマガスロマガ）
- リセット後短縮天井: NONE_CONFIRMED
- 朝一専用モード振り分け: NONE_CONFIRMED

## sources

取得日: 2026-08-31

1. パチマガスロマガ — 三國志 基本システム
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/igt_slot/44/a.php
   - 5号機/5ライン/3枚掛け、赤7BIG約315枚、緑7BIG約206枚、REG約83枚を確認。
   - reliability: ANALYSIS_HIGH

2. パチマガスロマガ — 三國志 ボーナス確率・PAYOUT
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/igt_slot/44/h.php
   - 設定別赤7BIG/緑7BIG/REG/合算、シミュレートPAYOUTを確認。
   - reliability: ANALYSIS_HIGH

3. パチマガスロマガ — 三國志 小役確率
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/igt_slot/44/c.php
   - 完璧手順時1000円あたり39.97〜44.31Gを確認。
   - reliability: ANALYSIS_HIGH

4. パチマガスロマガ — 三國志 RTについて
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/igt_slot/44/k.php
   - 50G RT、設定別+0.69〜+0.76枚/G、RTループ約50%、通常時777G後CZを確認。
   - reliability: ANALYSIS_HIGH

5. P-WORLD — 三國志
   - https://www.p-world.co.jp/machine/database/4663
   - 50G・約+0.7枚/GのRT、赤7約315枚/緑7約206枚/REG約86枚、通常時777G後CZ、設定変更後は内部CZ、朝一チェリーからRTなら設定変更濃厚を確認。
   - reliability: ANALYSIS_HIGH

6. HAZUSE — 三國志 解析・機種情報
   - https://hazuse.com/i/data/sangokushi/top.htm
   - 2007年5月、RT50G約+0.7枚/G、CZ平均16G、RT突入期待度50%、設定変更後がCZ突入契機であることを確認。
   - reliability: ANALYSIS_HIGH

7. 5号機クロニクル — IGTジャパン5号機全機種一覧
   - https://5goki.com/igt
   - 2007/5導入、設定別ボーナス確率、機械割97.8〜110.4%を確認。機械割はパチマガ値とCONFLICTとして保持。
   - reliability: ANALYSIS_SINGLE

8. Pマンズ / プレイグラフ転載 — IGTがコーエーとのコラボレーション第2弾
   - https://p-mans.blogspot.com/2007/03/
   - 2007-03-14赤坂プリンスホテルで発表展示会、設定6で110%超との当時業界記事を確認。
   - reliability: INDUSTRY

9. 三国志ニュース — 2007年5月7日 パチスロ三國志
   - https://cte.main.jp/newsch/search.php?direction=desc&keyType=phrase&mode=search&order=uid&query=&results=15&topic=9&type=stories
   - 2007-05-01にIGT公式サイト公開との当時記録を確認。実導入日の根拠には使用しない。
   - reliability: ANALYSIS_SINGLE

## missingFields

- 日単位の実納品/全国ホール導入日
- 据え置き時の777G救済カウンタ引継ぎ
- 電源OFF→ONのみの777Gカウンタ/CZ/RT状態処理
- 設定変更時の成立済みボーナス/RT途中状態処理
- ガックン等の本機固有変更判別

## conflicts

- 設定別機械割
  - パチマガスロマガ: 97.73 / 99.85 / 101.96 / 104.04 / 106.13 / 108.49%
  - 5号機クロニクル: 97.8 / 99.3 / 101.3 / 104.8 / 106.9 / 110.4%
  - 平均化しない。

## QA note

- 欠損判定前に「三國志 / パチスロ三國志 / IGT / IGTジャパン / 設定別 / 機械割 / BIG / REG / 合算 / 1000円 / 50枚 / ベース / RT / 決戦ラッシュ / 天井 / 777G / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン」を組み替え、当時解析、古いDB、業界記事、後年回顧資料を横断した。
- 性能コアは主要比較値が取得できたためCOMPLETE_CORE。resetBehaviorは設定変更後CZという重要挙動を確認できたが、据え置き/電断時引継ぎが未確定のためPARTIAL。
